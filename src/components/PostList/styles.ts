import tw, { styled } from 'twin.macro'

export const Wrapper = styled.main`
  ${tw`max-w-screen-xl px-8 mx-auto mb-8`}
`

export const Content = styled.div`
  ${tw`max-w-screen-md mx-auto mt-20`}

  a {
    ${tw`block`}

    & + a {
      ${tw`pt-8 mt-8 border-t border-neutral-300`}
    }

    time {
      ${tw`flex items-center text-base text-neutral-600`}
    }

    strong {
      ${tw`block mt-4 text-2xl leading-7 transition-colors duration-200`}
    }

    p {
      ${tw`mt-2 leading-7 text-neutral-700`}
    }

    &:hover strong {
      ${tw`text-primary-600`}
    }
  }
`
