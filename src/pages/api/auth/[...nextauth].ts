import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { fauna } from "../../../services/fauna"
import { query as q } from "faunadb"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
  ],
  callbacks: {

    async signIn(user) {
      const email = user.profile.email
      console.log(email)
      try{
      await fauna.query(
        q.Create(
          q.Collection('users'),
            {data:{email}}
        )
      )}catch(err){
        console.log(err)
      }
      return true
    }}
})