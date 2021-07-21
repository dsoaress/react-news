import tw, { styled } from 'twin.macro'

export const Wrapper = styled.main`
  height: calc(100vh - 5rem);
  ${tw`flex items-center justify-between max-w-screen-xl px-8 mx-auto space-x-12`}
`

export const Content = styled.section`
  ${tw`max-w-screen-md space-y-8`}

  > span {
    ${tw`text-2xl font-bold`}
  }

  h1 {
    ${tw`font-black leading-none text-7xl`}

    span {
      ${tw`text-primary-600`}
    }
  }

  p {
    ${tw`text-2xl leading-9`}

    span {
      ${tw`font-bold text-primary-600`}
    }
  }
`

export const ImageWrapper = styled.div`
  ${tw`h-96 w-96 bg-primary-600`}
`
