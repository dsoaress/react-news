import Link from 'next/link'

import { Content, Wrapper } from './styles'

type PostItemProps = {
  post: {
    title: string
    content: string
    date: string
  }
  preview?: boolean
}

export function PostItem({ post, preview = false }: PostItemProps) {
  return (
    <Wrapper>
      <Content preview={preview}>
        <h1>{post.title}</h1>
        <time>{post.date}</time>
        <div className="postContent" dangerouslySetInnerHTML={{ __html: post.content }} />

        {preview && (
          <div className="continueReading">
            Wanna continue reading?
            <Link href="/">
              <a>Subscribe now 🤟</a>
            </Link>
          </div>
        )}
      </Content>
    </Wrapper>
  )
}
