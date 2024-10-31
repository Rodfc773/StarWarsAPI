import { PrismaClient } from '@prisma/client';
import { Planet } from '../models/Planet';
import { Repository } from './interface/Repository';

const prisma = new PrismaClient();

export class PlanetRepository implements Repository<Planet> {
  async findall(): Promise<Planet[]> {
    const dataFromDB = await prisma.planet.findMany();

    const planets = dataFromDB.map(
      (planetData) =>
        new Planet(
          planetData.name,
          planetData.terrain,
          planetData.size,
          planetData.population,
          planetData.weather,
        ),
    );

    return planets;
  }
  async findOne(planetName: string): Promise<Planet> {
    const dataFromDB = await prisma.planet.findUnique({
      where: { name: planetName },
    });

    return new Planet(
      dataFromDB.name,
      dataFromDB.terrain,
      dataFromDB.size,
      dataFromDB.population,
      dataFromDB.weather,
    );
  }
  async create(data: Planet): Promise<Planet> {
    const { name, terrain, population, size, weather } = data;

    const dataFromDB = await prisma.planet.create({
      data: {
        name: name,
        terrain: terrain,
        size: size,
        population: population,
        weather: weather,
      },
    });

    return new Planet(
      dataFromDB.name,
      dataFromDB.terrain,
      dataFromDB.size,
      dataFromDB.population,
      dataFromDB.weather,
    );
  }
  async update(data: Planet, planetName: string): Promise<Planet> {
    const dataFromDB = await prisma.planet.update({
      where: { name: planetName },
      data: data,
    });

    return new Planet(
      dataFromDB.name,
      dataFromDB.terrain,
      dataFromDB.size,
      dataFromDB.population,
      dataFromDB.weather,
    );
  }
  async delete(planetName: string): Promise<Planet> {
    const dataFromDB = await prisma.planet.delete({
      where: { name: planetName },
    });
    return new Planet(
      dataFromDB.name,
      dataFromDB.terrain,
      dataFromDB.size,
      dataFromDB.population,
      dataFromDB.weather,
    );
  }
}
