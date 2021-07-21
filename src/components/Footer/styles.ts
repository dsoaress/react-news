import tw, { styled } from 'twin.macro'

export const Wrapper = styled.footer`
  ${tw`h-20`}
`

export const Content = styled.div`
  ${tw`flex items-center h-20 px-8 mx-auto`}

  p {
    ${tw`w-full text-sm text-center`}

    a {
      ${tw`font-bold transition-colors duration-200 text-primary-600 hover:text-primary-400`}
    }
  }
`
