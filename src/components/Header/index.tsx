import Link from 'next/link'

import { SignInButton } from '@/components/SignInButton'

import { Content, Wrapper } from './styles'

export function Header() {
  return (
    <Wrapper>
      <Content>
        <div className="logo">
          <span>React</span>News
        </div>

        <nav>
          <Link href="/">
            <a className="active">Home</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>

        <SignInButton />
      </Content>
    </Wrapper>
  )
}
