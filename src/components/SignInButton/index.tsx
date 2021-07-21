import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { Wrapper } from './styles'

export function SignInButton() {
  const isLogged = false

  return (
    <Wrapper logged={isLogged}>
      <FaGithub size={20} />
      {isLogged ? 'Daniel Soares' : 'Sign in with GitHub'}
      {isLogged && <FiX />}
    </Wrapper>
  )
}
