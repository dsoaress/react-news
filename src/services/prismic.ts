import Prismic from '@prismicio/client'
import { IncomingMessage } from 'http'

export function getPrismicClient(req?: IncomingMessage) {
  const { PRISMIC_ACCESS_TOKEN, PRISMIC_ENDPOINT } = process.env

  function accessToken() {
    if (!PRISMIC_ACCESS_TOKEN) {
      throw new Error('PRISMIC_ACCESS_TOKEN is missing')
    }

    return PRISMIC_ACCESS_TOKEN
  }

  function endpoint() {
    if (!PRISMIC_ENDPOINT) {
      throw new Error('PRISMIC_ENDPOINT is missing')
    }

    return PRISMIC_ENDPOINT
  }

  const prismic = Prismic.client(endpoint(), {
    req,
    accessToken: accessToken()
  })

  return prismic
}
