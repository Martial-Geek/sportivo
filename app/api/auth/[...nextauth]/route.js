import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcrypt";
import User from "@/models/User.js";
// import { connectToDB } from "@/utils/database.js";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   authorize: async (credentials) => {
    //     await connectToDB(); // Connect to your MongoDB

    //     const user = await User.findOne({ email: credentials.email });

    //     if (user) {
    //       const match = await bcrypt.compare(
    //         credentials.password,
    //         user.password
    //       );
    //       if (match) {
    //         return Promise.resolve(user);
    //       } else {
    //         return Promise.reject(new Error("Invalid password"));
    //       }
    //     } else {
    //       // User doesn't exist, sign the user up
    //       // use bcrypt to hash the password

    //       const hashedPassword = await bcrypt.hash(credentials.password, 10);

    //       try {
    //         const newUser = {
    //           email: credentials.email,
    //           password: hashedPassword,
    //         };
    //         const createdUser = await User.create(newUser);
    //         return createdUser;
    //       } catch (error) {
    //         Promise.reject(error);
    //       }
    //     }
    //   },
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/sign-in",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // store the user id from MongoDB to session
      if (!token) {
        const sessionUser = await User.findOne({ email: session.user.email });
        session.user.id = sessionUser._id.toString();
        session.user.email = sessionUser.email;
      } else {
        session.user.email = token.email;
        session.user.accessToken = token?.accessToken;
      }

      return session;
    },
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified;
      }
    },
  },
});

export { handler as GET, handler as POST };
