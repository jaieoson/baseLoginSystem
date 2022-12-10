// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"


import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  
   
  ],
})