import * as request from 'supertest';
import { App } from '../../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = new App().app;

const createStarSystemSut = () => {
  return {
    name: `Solar-b3-${Date.now()}`,
    description: `A solar system in a farway point
    in the universe, a remote place`,
  };
};

describe('Star System API Integration tests', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('Should return all Star Systems registered', async () => {
    const response = await request(app).get('/starsystem');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.anything());
  });

  it('Should return a specific Star System', async () => {
    const response = await request(app).get('/starsystem/Solar-b3');

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('Solar-b3');
  });
  it('Should create a new Star System in the database', async () => {
    const sut = createStarSystemSut();

    const response = await request(app).post('/starsystem').send(sut);

    await prisma.starSystem.delete({ where: { name: sut.name } });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.objectContaining(sut));
  });

  it('Should delete a Star System from the database', async () => {
    const sut = createStarSystemSut();

    await request(app).post('/starsystem').send(sut);

    const response = await request(app).delete(`/starsystem/${sut.name}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining(sut));
  });
});
