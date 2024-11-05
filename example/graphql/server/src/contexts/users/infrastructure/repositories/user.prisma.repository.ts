import { UserRepository } from '../../entity/user.repository';
import { prisma } from '../../../../database/database';
import { UserInput } from '../../entity/user';

export const userPrismaRepository: UserRepository = {
  createUser: async (user:UserInput) => {
    return await prisma.user.create({ data: user });
  },
  getUserByEmail: async (email: string) => {
    return await prisma.user.findUnique({ where: { email } });
  },
  getAllUsers: async () => {
    return await prisma.user.findMany();
  }

  getUserWithPosts: async (email:string) => {
    return await prisma.user.findUnique({
      where: { email },
      include: {
        posts: true,
      },
    });
  },
};
