import * as request from 'supertest';
import { App } from '../../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = new App().app;

describe('Planet API Integration Tests', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('Should return all planet registered', async () => {
    const response = await request(app).get('/planets');

    expect(response.status).toBe(200);
  });

  it('Should create a new planet and return his data', async () => {
    const planetDataSut = {
      name: `Jarilo-IV-${Date.now()}`,
      terrain: 'Rock Hard',
      size: 'Big',
      population: 33000,
      weather: 'Rainy',
    };

    const response = await request(app).post('/planets').send(planetDataSut);
    await prisma.planet.delete({ where: { name: planetDataSut.name } });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.objectContaining(planetDataSut));
  });

  it('Should find a planet in the database', async () => {
    const planetDataSut = await prisma.planet.create({
      data: {
        name: `Jarilo-VI-${Date.now()}`,
        terrain: 'Rock Hard',
        size: 'Big',
        population: 32000,
        weather: 'Rainy',
      },
    });

    const response = await request(app).get(`/planets/${planetDataSut.name}`);
    await prisma.planet.delete({ where: { name: planetDataSut.name } });

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(planetDataSut.name);
  });
});
