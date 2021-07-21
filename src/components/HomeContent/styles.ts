import tw, { styled } from 'twin.macro'

export const Wrapper = styled.main`
  height: calc(100vh - 10rem);
  ${tw`grid items-center justify-between max-w-screen-xl grid-cols-3 gap-12 px-8 mx-auto`}
`

export const Content = styled.section`
  ${tw`col-span-3 space-y-8 text-center md:text-left lg:col-span-2`}

  > span {
    ${tw`text-lg font-bold md:text-2xl`}
  }

  h1 {
    ${tw`text-3xl font-black leading-none md:text-7xl`}

    span {
      ${tw`text-primary-600`}
    }
  }

  p {
    ${tw`text-lg md:leading-9 md:text-2xl`}

    span {
      ${tw`font-bold text-primary-600`}
    }
  }

  button {
    ${tw`mx-auto md:m-0`}
  }
`

export const ImageWrapper = styled.div`
  ${tw`hidden lg:block`}
`
