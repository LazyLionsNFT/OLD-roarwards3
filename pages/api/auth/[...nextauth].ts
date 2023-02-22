import NextAuth from 'next-auth';
import TwitterProvider from "next-auth/providers/twitter";

console.log("dads");
export default NextAuth({
  providers: [
    TwitterProvider({
        clientId: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY!,
        clientSecret: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET!
  })
  ],
//   callbacks: {
//     session({ session, token, user }) {
//       return session // The return type will match the one returned in `useSession()`
//     },
//   },
secret: process.env.NEXTAUTH_SECRET,
pages: {
    error: '/error', // Error code passed in query string as ?error=
}
});