import request, { Response } from 'supertest';
import app from '../src/app';

import { prisma } from '../src/database/database';

describe('createUser', () => {
  //   beforeAll(async () => {
  //     await prisma.user.deleteMany({});
  //   });

  afterAll(async () => {
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  it('should return a bad request response where user body is not complete', async () => {
    const response: Response = await request(app)
      .post('/api/users')
      .send({
        name: 'User',
      })
      .expect(400);

    expect(response.body).toMatchObject({
      error: 'Name and email are required',
    });
  });

  it('should create a user', async () => {
    const response: Response = await request(app)
      .post('/api/users')
      .send({
        email: 'user@email.com',
        name: 'User',
      })
      .expect(201);

    expect(response.body).toMatchObject({
      id: expect.any(String),
      email: 'user@email.com',
      name: 'User',
      age: null,
      bio: null,
    });
  });

  it('should call all users', async () => {
    const response: Response = await request(app).get('/api/users').expect(200);

    expect(response.body).toEqual([
      {
        id: expect.any(String),
        email: 'user@email.com',
        name: 'User',
        age: null,
        bio: null,
      },
    ]);
  });
});
