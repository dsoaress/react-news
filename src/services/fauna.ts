import { Client } from 'faunadb'

const { FAUNADB_KEY } = process.env

if (!FAUNADB_KEY) {
  throw new Error('FAUNADB_KEY is missing')
}

export const fauna = new Client({
  secret: FAUNADB_KEY
})

export { query as q } from 'faunadb'
