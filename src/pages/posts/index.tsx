import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Layout } from '@/components/Layout'
import { PostList } from '@/components/PostList'
import { getAllPosts } from '@/lib/getPosts'

type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
}

type PostsProps = {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <Layout>
      <Head>
        <title>Posts | React News</title>
      </Head>

      <PostList posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: { posts },
    revalidate: 60 * 30
  }
}
