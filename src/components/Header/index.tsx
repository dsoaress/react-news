import Link from 'next/link'
import { useRouter } from 'next/router'

import { SignInButton } from '@/components/SignInButton'

import { Content, SignInButtonWrapper, Wrapper } from './styles'

export function Header() {
  const { asPath } = useRouter()

  const links = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Posts',
      url: '/posts'
    }
  ]

  return (
    <Wrapper>
      <Content>
        <div className="logo">
          <span>React</span>News
        </div>

        <nav>
          {links.map(link => (
            <Link href={link.url} key={link.url}>
              <a className={asPath === link.url ? 'active' : ''}>{link.label}</a>
            </Link>
          ))}
        </nav>

        <SignInButtonWrapper>
          <SignInButton />
        </SignInButtonWrapper>
      </Content>
    </Wrapper>
  )
}
