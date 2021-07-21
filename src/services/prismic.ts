import Prismic from '@prismicio/client'
import { IncomingMessage } from 'http'

export function getPrismicClient(req?: IncomingMessage) {
  const { PRISMIC_ACCESS_TOKEN, PRISMIC_ENDPOINT } = process.env

  if (!PRISMIC_ACCESS_TOKEN || !PRISMIC_ENDPOINT) {
    throw new Error('Prismic keys are missing')
  }

  const prismic = Prismic.client(PRISMIC_ENDPOINT, {
    req,
    accessToken: PRISMIC_ACCESS_TOKEN
  })

  return prismic
}
