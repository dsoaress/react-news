import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { fauna, q } from '@/services/fauna'

const { GITHUB_ID, GITHUB_SECRET } = process.env

if (!GITHUB_ID || !GITHUB_SECRET) {
  throw new Error('GitHub keys are missing')
}

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
      scope: 'read:user'
    })
  ],
  callbacks: {
    async session(session) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(q.Match(q.Index('user_by_email'), q.Casefold(session.user?.email!)))
                )
              ),
              q.Match(q.Index('subscription_by_status'), 'active')
            ])
          )
        )

        return {
          ...session,
          activeSubscription: userActiveSubscription
        }
      } catch {
        return {
          ...session,
          activeSubscription: null
        }
      }
    },
    async signIn(user, account, profile) {
      const { email, name, image } = user

      try {
        await fauna.query(
          q.If(
            q.Not(q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email!)))),
            q.Create(q.Collection('users'), { data: { email, name, image } }),
            q.Update(q.Collection('users'), { data: { email, name, image } })
          )
        )

        return true
      } catch {
        return false
      }
    }
  }
})
