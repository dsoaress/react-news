import tw, { css, styled } from 'twin.macro'

type WrapperProps = {
  logged?: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${tw`flex items-center justify-center h-12 px-6 text-sm font-bold rounded-full bg-neutral-200 transition duration-200 hover:(filter brightness-90)`}

  svg:first-child {
    ${tw`mr-3`}
    ${({ logged }) => (logged ? tw`text-primary-600` : tw`text-green-500!`)}
  }

  svg:last-child {
    ${tw`ml-2 text-neutral-500`}
  }
`
