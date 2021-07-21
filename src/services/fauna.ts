import { Client } from 'faunadb'

const apiKey = () => {
  const { FAUNADB_KEY } = process.env

  if (!FAUNADB_KEY) {
    throw new Error('FAUNADB_KEY is missing')
  }

  return FAUNADB_KEY
}

export const fauna = new Client({
  secret: apiKey()
})

export { query as q } from 'faunadb'
