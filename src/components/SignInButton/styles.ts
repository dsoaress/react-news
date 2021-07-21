import { CgSpinner } from 'react-icons/cg'
import tw, { styled } from 'twin.macro'

type WrapperProps = {
  loading: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${tw`flex items-center justify-center h-12 px-6 text-sm font-bold rounded-full bg-neutral-200 transition duration-200 hover:(filter brightness-90)`}
  ${({ loading }) => loading && tw`cursor-wait`}

  svg:first-child {
    ${tw`mr-3`}
  }

  svg:last-child {
    ${tw`ml-2`}
  }
`

export const LoadingIcon = styled(CgSpinner)`
  ${tw`animate-spin`}
`
