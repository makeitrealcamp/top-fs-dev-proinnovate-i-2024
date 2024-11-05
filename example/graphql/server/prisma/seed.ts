// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.like.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  // Hash passwords
  const passwordHash = await bcrypt.hash('Password123!', 10);

  // Create Users
  const users = await prisma.user.createMany({
    data: [
      {
        email: 'alice@example.com',
        password: passwordHash,
        isVerified: true,
        avatarUrl: '/avatars/alice.png',
      },
      {
        email: 'bob@example.com',
        password: passwordHash,
        isVerified: true,
        avatarUrl: '/avatars/bob.png',
      },
      {
        email: 'charlie@example.com',
        password: passwordHash,
        isVerified: true,
        avatarUrl: '/avatars/charlie.png',
      },
      {
        email: 'diana@example.com',
        password: passwordHash,
        isVerified: true,
        avatarUrl: '/avatars/diana.png',
      },
      {
        email: 'eve@example.com',
        password: passwordHash,
        isVerified: true,
        avatarUrl: '/avatars/eve.png',
      },
    ],
  });

  // Fetch the created users with their IDs
  const userAlice = await prisma.user.findUnique({ where: { email: 'alice@example.com' } });
  const userBob = await prisma.user.findUnique({ where: { email: 'bob@example.com' } });
  const userCharlie = await prisma.user.findUnique({ where: { email: 'charlie@example.com' } });
  const userDiana = await prisma.user.findUnique({ where: { email: 'diana@example.com' } });
  const userEve = await prisma.user.findUnique({ where: { email: 'eve@example.com' } });

  // Create Posts
  if (!userAlice || !userBob || !userCharlie || !userDiana || !userEve) {
    throw new Error('Failed to create users');
  }
  const post1 = await prisma.post.create({
    data: {
      content: 'Hello, this is Alice\'s first post!',
      authorId: userAlice.id,
      images: ['/posts/alice_post1.png'],
      emoticons: [':smile:'],
    },
  });

  const post2 = await prisma.post.create({
    data: {
      content: 'Bob here, enjoying the sunny weather.',
      authorId: userBob.id,
      images: [],
      emoticons: [':sunny:'],
    },
  });

  const post3 = await prisma.post.create({
    data: {
      content: 'Charlie\'s thoughts on technology.',
      authorId: userCharlie.id,
      images: [],
      emoticons: [':computer:'],
    },
  });

  // Create Comments
  await prisma.comment.createMany({
    data: [
      {
        content: 'Nice post, Alice!',
        authorId: userBob.id,
        postId: post1.id,
      },
      {
        content: 'Thanks, Bob!',
        authorId: userAlice.id,
        postId: post1.id,
      },
      {
        content: 'I agree with your points, Charlie.',
        authorId: userDiana.id,
        postId: post3.id,
      },
    ],
  });

  // Create Likes
  await prisma.like.createMany({
    data: [
      {
        userId: userAlice.id,
        postId: post2.id,
        isLike: true,
      },
      {
        userId: userBob.id,
        postId: post3.id,
        isLike: true,
      },
      {
        userId: userCharlie.id,
        postId: post1.id,
        isLike: true,
      },
      {
        userId: userEve.id,
        postId: post1.id,
        isLike: false,
      },
    ],
  });

  console.log('Database has been seeded. 🌱');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
