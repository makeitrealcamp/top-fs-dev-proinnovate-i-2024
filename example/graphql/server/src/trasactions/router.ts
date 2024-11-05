import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { Users } from '../mongoose';

const prisma = new PrismaClient();

const router = Router();

router.post('/transactions', async (req, res) => {
  console.log('in transaction');
  try {
    /* Problematic code 
    const user = await prisma.user.create({
      data: {
        email: 'alice@example.com',
        password: 'passwordHash',
        isVerified: true,
        avatarUrl: '/avatars/alice.png',
      },
    });
    const post = await prisma.post.create({
      data: {
        content: "Charlie's thoughts on technology.",
        authorId: undefined,
        images: [],
        emoticons: [':computer:'],
      },
    });
*/

    const [user, post] = await prisma.$transaction([
      prisma.user.create({
        data: {
          email: 'alice@example.com',
          password: 'passwordHash',
          isVerified: true,
          avatarUrl: '/avatars/alice.png',
        },
      }),
      prisma.post.create({
        data: {
          content: "Charlie's thoughts on technology.",
          authorId: undefined,
          images: [],
          emoticons: [':computer:'],
        },
      }),
    ]);
    console.log({
      post,
      user,
    });
    res.json(post);
  } catch (error) {
    console.log(error);
  }
});

router.post('/transactions2', async (req, res) => {
  // create user

  try {
    const data = await prisma.$transaction(async (internClient) => {
      const user = await internClient.user.create({
        data: {
          email: 'eve@example.com',
          password: 'passwordHash',
          isVerified: true,
          avatarUrl: '/avatars/eve.png',
        },
      });
      // create user other service
      const userExternalService = await Users.findOne({ email: 'eve@example.com' });
        if (userExternalService) {
            throw new Error('User  found');
        }
      const externalService = await Users.create({
        email: 'eve@example.com',
        password: 'passwordHash',
        isVerified: true,
        avatarUrl: '/avatars/eve.png',
      });
      console.log({ externalService });
      const updatedUser = await internClient.user.update({
        where: {
          id: user.id,
          email: user.email,
        },
        data: {
          oauthId: String(externalService._id),
        },
      });
    });
    res.json(data);
    // reintentar la transaction
  } catch (error) {
    console.log(error);
  }

  //update user locally
});

export default router;
