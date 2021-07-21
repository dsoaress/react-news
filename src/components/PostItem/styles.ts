import tw, { styled } from 'twin.macro'

type ContentProps = {
  preview: boolean
}

export const Wrapper = styled.main`
  ${tw`max-w-screen-xl px-8 mx-auto mb-8`}
`

export const Content = styled.article<ContentProps>`
  ${tw`max-w-screen-md mx-auto mt-20`}

  h1 {
    ${tw`text-3xl font-black lg:text-4xl`}
  }

  time {
    ${tw`block my-6 text-base text-neutral-600`}
  }

  .postContent {
    ${tw`prose max-w-none lg:prose-lg`}
    ${({ preview }) =>
      preview && tw`text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-transparent`}

    h1, h2, h3, h4, h5, h6 {
      ${({ preview }) => preview && tw`text-transparent bg-clip-text`}
    }
  }

  .continueReading {
    ${tw`p-8 mt-16 mb-8 text-lg text-center rounded-full text-primary-200 bg-primary-600`}

    a {
      ${tw`ml-2 font-bold text-white hover:underline`}
    }
  }
`
