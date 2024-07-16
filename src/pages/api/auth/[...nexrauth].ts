import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../lib/prisma'; // 修正: Prismaクライアントのインポート
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcryptjs';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Prismaクライアントを使用してユーザーを検索
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });

        if (user && bcrypt.compareSync(credentials!.password, user.password)) {
          return { id: user.id, name: user.name, email: user.email };
        }

        return null;
      }
    })
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
});
