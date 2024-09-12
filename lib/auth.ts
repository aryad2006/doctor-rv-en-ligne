import { AuthOptions, NextAuthOptions } from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaClient } from "@/lib/db";

import type { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
// more providers at https://next-auth.js.org/providers
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jb@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log(
            "Authorize function called with credentials:",
            credentials
          );
          // Check if user credentials are Correct
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          console.log("Essai 1 de vérification ");
          //Check if user exists
          const existingUser = await prismaClient.user.findUnique({
            where: { email: credentials.email },
          });

          if (!existingUser) {
            console.log("Utilisateur non trouvé");
            throw { error: "Utilisateur non trouvé", status: 404 };
          }

          console.log("Essai 2 de vérification");
          console.log(existingUser);
          let passwordMatch: boolean = false;
          //Check if Password is correct
          if (existingUser && existingUser.password) {
            // if user exists and password exists
            passwordMatch = await compare(
              credentials.password,
              existingUser.password
            );
          }
          if (!passwordMatch) {
            console.log("Mot de passe incorrect");
            throw { error: "Mot de passe incorrect", status: 404 };
          }
          console.log("Essai 3 de vérification");
          const user = {
            id: existingUser.id.toString(),
            name: existingUser.firstName + " " + existingUser.lastName,
            email: existingUser.email,
            role: existingUser.role,
            picture: existingUser.image,
          };
          //
          console.log("Utilisateur vérifié");
          console.log(user);
          return user;
        } catch (error) {
          console.log("Tout a échoué");
          console.log(error);
          throw { error: "quelque chose s'est mal passé", status: 404 };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await prismaClient.user.findFirst({
        where: { email: token?.email ?? "" },
      });
      if (!dbUser) {
        if (user) {
          token.id = user.id;
          token.role = (user as any).role;
        }
        return token;
      }

      return {
        id: dbUser.id.toString(),
        name: dbUser.firstName + " " + dbUser.lastName,
        email: dbUser.email,
        role: dbUser.role,
        picture: dbUser.image,
      };
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
