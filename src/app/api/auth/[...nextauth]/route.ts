import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
console.log(process.env.CLIENT_ID)
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET
});

export {handler as GET,handler as POST}
