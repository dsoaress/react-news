import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'

import { GlobalStyles } from '@/styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}
