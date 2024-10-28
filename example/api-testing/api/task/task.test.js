import { describe, expect, it } from 'vitest';
const supertest = require('supertest');
const { faker } = require('@faker-js/faker');

const app = require('../../app');

const request = supertest(app);

describe('Task Endpoint', () => {
  describe('GET /tasks', () => {
    it('should respond a 200 status code', async () => {
      // Arrange
      const expected = 200;

      // Act
      const response = await request.get('/api/tasks');

      // Assert
      expect(response.statusCode).toEqual(expected);
    });

    it('should respond with an array of tasks', async () => {
      // Arrange
      const expected = Array;

      // Act
      const response = await request.get('/api/tasks');

      // Assert
      expect(response.body).toBeInstanceOf(expected);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String),
            completed: expect.any(Boolean),
          }),
        ])
      );
    });
  });

  describe('POST /tasks', () => {
    it('should respond a 201 status code', async () => {
      // Arrange
      const expected = 201;
      const body = {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
      };

      // Act
      const response = await request.post('/api/tasks').send(body);

      // Assert
      expect(response.statusCode).toEqual(expected);
    });

    it('should respond with the created task', async () => {
      // Arrange
      const expected = 201;
      const body = {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
      };

      // Act
      const response = await request.post('/api/tasks').send(body);

      // Assert
      expect(response.statusCode).toEqual(expected);
      expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: body.title,
          description: body.description,
          completed: false,
        })
      );
    });

    it('should respond a 400 when title is missing', async () => {
      // Arrange
      const statusCode = 400;
      const body = {
        description: faker.lorem.paragraph(),
      };
      const expected = { message: 'Title is required' };

      // Act
      const response = await request.post('/api/tasks').send(body);

      // Assert
      expect(response.statusCode).toEqual(statusCode);
      expect(response.body).toEqual(expected);
    });
  });
});
