import * as request from 'supertest';
import { PrismaClient } from '@prisma/client';

import { App } from '../../src/app';

const app = new App().app;

const prisma = new PrismaClient();

const createSut = () => {
  return {
    name: `User-${Date.now()}`,
    email: `user@gmail.com`,
    nickname: `user${Date.now()}`,
    password: '123456',
  };
};

describe('User Route tests', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });
  it('Should return all users registered', async () => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.anything());
  });

  it('Should create a user and return his informations', async () => {
    const userSut = createSut();
    const response = await request(app).post('/users').send(userSut);

    await prisma.user.delete({ where: { email: userSut.email } });

    expect(response.status).toBe(201);
    expect(response.body.name).toEqual(userSut.name);
  });
});
