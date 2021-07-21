import Head from 'next/head'

import { HomeContent } from '@/components/HomeContent'
import { Layout } from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | ReactNews</title>
      </Head>
      <HomeContent />
    </Layout>
  )
}
