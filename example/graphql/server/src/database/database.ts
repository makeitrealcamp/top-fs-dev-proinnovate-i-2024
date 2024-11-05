import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const databaseConnect = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to the database with Prisma');
  } catch (error) {
    console.error('Unable to connect to the database');
    console.error(error);
  }
};
