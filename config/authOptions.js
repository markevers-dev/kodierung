import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_OAUTH_CLIENT_ID,
      clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 15 * 60, // 15 minutes
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.username = profile.login;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token?.username) {
        session.user.username = token.username;
      }
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};
