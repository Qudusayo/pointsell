import { prisma } from "@/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Role } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

const getUserRole = async (userId: string) => {
	const user = await prisma.user.findUnique({ where: { id: userId } });
	return user?.role;
};

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			httpOptions: {
				timeout: 40000,
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				const userId = token.sub as string;
				token.role = await getUserRole(userId);
			}
			return token;
		},
		session: async ({ session, token }) => {
			session.user.role = token.role as Role;
			return session;
		},
	},
};
