import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const Styles = createGlobalStyle`
  html {
    ${tw`font-sans text-neutral-900 bg-neutral-50`}
  }
`
export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Styles />
  </>
)
