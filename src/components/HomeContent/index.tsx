import Image from 'next/image'

import heroImg from '@/assets/hero.svg'
import { SubscribeButton } from '@/components/SubscribeButton'

import { Content, ImageWrapper, Wrapper } from './styles'

export function HomeContent() {
  return (
    <Wrapper>
      <Content>
        <span>👋 Hey, welcome</span>

        <h1>
          News about the <span>React</span> world.
        </h1>

        <p>
          Get access to all the publication <br />
          <span>for $9.90 month</span>
        </p>

        <SubscribeButton />
      </Content>
      <ImageWrapper>
        <Image src={heroImg} alt="Girl coding" />
      </ImageWrapper>
    </Wrapper>
  )
}
