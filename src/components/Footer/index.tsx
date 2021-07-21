import Link from 'next/link'

import { Content, Wrapper } from './styles'

export function Footer() {
  return (
    <Wrapper>
      <Content>
        <p>
          {new Date().getFullYear()} &copy; React News
          <br />
          by{' '}
          <Link href="https://github.com/dsoaress/react-news">
            <a>Daniel Soares</a>
          </Link>
          .
        </p>
      </Content>
    </Wrapper>
  )
}
