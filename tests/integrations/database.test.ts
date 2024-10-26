import * as request from 'supertest';
//import app from '../../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Planet API Integration Tests', () => {
  afterAll(async () => {
    await prisma.planet.deleteMany({});
    await prisma.$disconnect();
  });

  it('Should return all planet registered', async () => {
    const response = await request('http://localhost:3000').get('/planets');

    expect(response.status).toBe(200);
  });

  it('Should create a new planet and return his data', async () => {
    const planetDataSut = {
      name: 'Jarilo-V',
      terrain: 'Rock Hard',
      size: 'Big',
      population: 32000,
      weather: 'Rainy',
    };

    const response = await request('http://localhost:3000')
      .post('/planets')
      .send(planetDataSut);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.objectContaining(planetDataSut));
  });
});
