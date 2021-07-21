import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'

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
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [post.slug, router, session])

  return (
    <Layout>
      <Head>
        <title>{post.title} | React News</title>
      </Head>

      <PostItem post={post} preview />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const isPreview = true
  const post = await getSinglePost(String(params?.slug), isPreview)
  return {
    props: { post }
  }
}
