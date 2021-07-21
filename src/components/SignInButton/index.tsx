import { signIn, signOut, useSession } from 'next-auth/client'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { LoadingIcon, Wrapper } from './styles'

export function SignInButton() {
  const [session] = useSession()
  const [loading, setLoading] = useState(false)

  function handleAuth() {
    setLoading(true)

    if (session) {
      signOut()
    } else {
      signIn('github')
    }
  }

  return (
    <Wrapper onClick={handleAuth} loading={loading} disabled={loading}>
      {loading ? <LoadingIcon size={20} /> : <FaGithub size={20} />}
      {session ? session.user?.name : 'Sign in with GitHub'}
      {session && <FiX />}
    </Wrapper>
  )
}
