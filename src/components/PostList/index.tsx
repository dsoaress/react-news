import Link from 'next/link'

import { Content, Wrapper } from './styles'

type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
}

type PostListProps = {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  return (
    <Wrapper>
      <Content>
        {posts.map(post => {
          return (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.date}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          )
        })}
      </Content>
    </Wrapper>
  )
}
