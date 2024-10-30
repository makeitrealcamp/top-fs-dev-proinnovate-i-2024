import { PrismaClient } from '@prisma/client';

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from './user.service';

describe('User Service', () => {
  let prisma = new PrismaClient();

  beforeAll(async () => {
    await prisma.$connect();
  });
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('getAllUsers', () => {
    test('should return an array of users', async () => {
      // Arrange
      const expected = Array;

      // Act
      const actual = await getAllUsers();

      // Assert
      expect(actual).toBeInstanceOf(expected);
    });

    // test('should return an empty array if there are no users', async () => {
    //   // Arrange
    //   const expected = [];

    //   // Act
    //   const actual = await getAllUsers();

    //   // Assert
    //   expect(actual).toEqual(expected);
    // });
  });
});
