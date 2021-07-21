import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getSession } from 'next-auth/client'

import { Layout } from '@/components/Layout'
import { PostItem } from '@/components/PostItem'
import { getSinglePost } from '@/lib/getPosts'

type PostProps = {
  post: {
    slug: string
    title: string
    content: string
    date: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | React News</title>
      </Head>

      <PostItem post={post} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const session = await getSession({ req })

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/posts/preview/${params?.slug}`,
        permanent: false
      }
    }
  }

  const post = await getSinglePost(String(params?.slug))
  return {
    props: { post }
  }
}
