import tw, { css, styled } from 'twin.macro'

type WrapperProps = {
  logged?: boolean
}

export const Wrapper = styled.button<WrapperProps>(({ logged = false }) => [
  tw`flex items-center justify-center h-12 px-6 text-sm font-bold rounded-full bg-neutral-200 transition duration-200 hover:(filter brightness-90)`,

  css`
    svg:first-child {
      ${tw`mr-3`}
      ${logged ? tw`text-primary-600` : tw`text-green-500!`}
    }

    svg:last-child {
      ${tw`ml-2 text-neutral-500`}
    }
  `
])
