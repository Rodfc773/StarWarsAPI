import * as request from 'supertest';
import { PrismaClient } from '@prisma/client';

import { App } from '../../src/app';

const app = new App().app;

const prisma = new PrismaClient();

const createSut = () => {
  return {
    name: `User-example-123`,
    email: `user123@gmail.com`,
    nickname: `userExample`,
    password: '123456',
  };
};

const createSutUpdated = () => {
  return {
    name: `User-alterado`,
    email: `user123@gmail.com`,
    nickname: `userExample123`,
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

  it('Should update the information about a user', async () => {
    const userSut = createSut();
    await request(app).post('/users').send(userSut);

    const userSutUpdated = createSutUpdated();

    const response = await request(app)
      .put(`/users/${userSut.nickname}`)
      .send(userSutUpdated);

    await prisma.user.delete({ where: { email: userSutUpdated.email } });

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(userSutUpdated.name);
  });
});
