import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a new user
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Cristian Moreno',
  //     email: 'k@lo.com',
  //   },
  // });
  // console.log(user);

  // Get a user
  // const users = await prisma.user.findMany();
  // console.log(users);

  // Relationship
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'mafe',
  //     email: 'mafe@gmail.com',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Hello world',
  //           content: 'loremp',
  //           published: true,
  //         },
  //         {
  //           title: 'my second post',
  //           content: 'this is still a draft',
  //         },
  //       ],
  //     },
  //   },
  // });
  // console.log(user);

  // Include post
  const usersWithPost = await prisma.user.findMany({
    include: {
      posts: {
        select: {
          id: true,
          title: true,
          content: true,
        },
      },
    },
  });

  console.dir(usersWithPost, { depth: null });
}

main()
  .then(async () => {
    console.log('Done');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
