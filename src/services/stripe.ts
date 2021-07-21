import Stripe from 'stripe'

import packageFile from '../../package.json'

const { STRIPE_API_KEY } = process.env

if (!STRIPE_API_KEY) {
  throw new Error('STRIPE_API_KEY is missing')
}

export const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'ReactNews',
    version: packageFile.version
  }
})
