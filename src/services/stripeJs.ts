import { loadStripe } from '@stripe/stripe-js'

export async function getStripe() {
  const { NEXT_PUBLIC_STRIPE_PUBLIC_KEY } = process.env

  if (!NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is missing')
  }

  const stripeJs = await loadStripe(NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
  return stripeJs
}
