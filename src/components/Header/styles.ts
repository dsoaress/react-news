import tw, { styled } from 'twin.macro'

export const Wrapper = styled.header`
  ${tw`h-20 shadow-md`}
`

export const Content = styled.div`
  ${tw`flex items-center h-20 max-w-screen-xl px-8 mx-auto`}

  .logo {
    ${tw`text-3xl font-black`}

    span {
      ${tw`text-primary-600`}
    }
  }

  nav {
    ${tw`h-20 ml-20 space-x-8`}

    a {
      ${tw`relative inline-block h-20 px-2 transition-colors duration-200 text-neutral-600 line-height[5rem] hover:text-neutral-900`}

      &.active {
        ${tw`text-neutral-900 font-bold after:(content h-1 rounded-t w-full absolute bottom-0 left-0 bg-primary-600)`}
      }
    }
  }

  button {
    ${tw`ml-auto`}
  }
`
