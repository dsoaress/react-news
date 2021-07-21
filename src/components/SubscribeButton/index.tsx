import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

import { api } from '@/services/api'
import { getStripe } from '@/services/stripeJs'

import { Wrapper } from './styles'

export function SubscribeButton() {
  const [session] = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post(`/subscribe`)

      const { sessionId } = response.data
      const stripe = await getStripe()

      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return <Wrapper onClick={handleSubscribe}>Subscribe now</Wrapper>
}
