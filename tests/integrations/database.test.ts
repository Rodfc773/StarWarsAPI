import * as request from 'supertest';
import { App } from '../../src/app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = new App().app;

const createPlanetSut = () => {
  return {
    name: `Jarilo-IV-${Date.now()}`,
    terrain: 'Rock Hard',
    size: 'Big',
    population: 33000,
    weather: 'Rainy',
  };
};

describe('Planet API Integration Tests', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('Should return all planet registered', async () => {
    const response = await request(app).get('/planets');

    expect(response.status).toBe(200);
  });

  it('Should create a new planet and return his data', async () => {
    const planetDataSut = createPlanetSut();

    const response = await request(app).post('/planets').send(planetDataSut);
    await prisma.planet.delete({ where: { name: planetDataSut.name } });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.objectContaining(planetDataSut));
  });

  it('Should find a planet in the database', async () => {
    const planetDataSut = createPlanetSut();

    await request(app).post('/planets').send(planetDataSut);

    const response = await request(app).get(`/planets/${planetDataSut.name}`);
    await prisma.planet.delete({ where: { name: planetDataSut.name } });

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(planetDataSut.name);
  });

  it('Should to delete a espefic planet', async () => {
    const planetDataSut = createPlanetSut();

    await request(app).post('/planets').send(planetDataSut);

    const response = await request(app).delete(
      `/planets/${planetDataSut.name}`,
    );

    expect(response.status).toBe(200);
    expect(response.body.planet.name).toEqual(planetDataSut.name);
  });
});
