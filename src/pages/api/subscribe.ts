import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import { fauna, q } from '@/services/fauna'
import { stripe } from '@/services/stripe'

type User = {
  ref: {
    id: string
  }
  data: {
    stripe_customer_id: string
  }
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { STRIPE_SUCCESS_URL, STRIPE_CANCEL_URL } = process.env

  if (!STRIPE_SUCCESS_URL || !STRIPE_CANCEL_URL) {
    throw new Error('Stripe URLs are missing')
  }

  if (req.method === 'POST') {
    const session = await getSession({ req })

    const user = await fauna.query<User>(
      q.Get(q.Match(q.Index('user_by_email'), q.Casefold(session?.user?.email!)))
    )

    let customerId = user.data.stripe_customer_id

    if (!customerId) {
      const stripeCustomer = await stripe.customers.create({
        email: session?.user?.email!
      })

      await fauna.query(
        q.Update(q.Ref(q.Collection('users'), user.ref.id), {
          data: { stripe_customer_id: stripeCustomer.id }
        })
      )

      customerId = stripeCustomer.id
    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {
          price: 'price_1JExGQHbS7qlKi89aBl3mfAH',
          quantity: 1
        }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: STRIPE_SUCCESS_URL,
      cancel_url: STRIPE_CANCEL_URL
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}
