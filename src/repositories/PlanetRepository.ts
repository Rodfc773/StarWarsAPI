import { PrismaClient } from '@prisma/client';
import { PlanetDTO } from '../DTOS/Planet';
import { Repository } from './interface/Repository';

const prisma = new PrismaClient();

export class PlanetRepository implements Repository<PlanetDTO> {
  async findall(): Promise<PlanetDTO[]> {
    const dataFromDB = await prisma.planet.findMany();

    const planets = dataFromDB.map((planetData) => new PlanetDTO(planetData));

    return planets;
  }
  async findOne(planetName: string): Promise<PlanetDTO> {
    const dataFromDB = await prisma.planet.findUnique({
      where: { name: planetName },
    });

    return new PlanetDTO(dataFromDB);
  }
  async create(data: PlanetDTO): Promise<PlanetDTO> {
    const dataFromDB = await prisma.planet.create({
      data: data,
    });

    return new PlanetDTO(dataFromDB);
  }
  async update(data: PlanetDTO, planetName: string): Promise<PlanetDTO> {
    const dataFromDB = await prisma.planet.update({
      where: { name: planetName },
      data: data,
    });

    return new PlanetDTO(dataFromDB);
  }
  async delete(planetName: string): Promise<PlanetDTO> {
    const dataFromDB = await prisma.planet.delete({
      where: { name: planetName },
    });
    return new PlanetDTO(dataFromDB);
  }
}
