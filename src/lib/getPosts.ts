import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { getPrismicClient } from '@/services/prismic'

export async function getAllPosts() {
  const prismic = getPrismicClient()

  const response = await prismic.query([Prismic.predicates.at('document.type', 'post')], {
    fetch: ['post.title', 'post.date', 'post.content'],
    orderings: '[post.date desc]',
    pageSize: 100
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content: { type: string }) => content.type === 'paragraph')?.text ??
        '',
      date: new Date(post.data.date).toLocaleDateString('en', {
        dateStyle: 'medium'
      })
    }
  })

  return posts
}

export async function getSinglePost(slug: string, preview: boolean = false) {
  const prismic = getPrismicClient()

  const response = await prismic.getByUID('post', slug, {})

  const content = preview
    ? RichText.asHtml(response.data.content.splice(0, 2))
    : RichText.asHtml(response.data.content)

  const post = {
    slug: slug,
    title: RichText.asText(response.data.title),
    content,
    date: new Date(response.data.date).toLocaleDateString('en', {
      dateStyle: 'medium'
    })
  }

  return post
}
