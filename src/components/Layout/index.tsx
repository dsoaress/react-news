import { ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
