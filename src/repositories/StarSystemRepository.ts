import { PrismaClient } from '@prisma/client';

import { Repository } from './interface/Repository';
import { StarSystem } from '../models/Starsystem';

const prisma = new PrismaClient();

export class StarSystemRepository implements Repository<StarSystem> {
  async findall(): Promise<StarSystem[]> {
    const dataFromDB = await prisma.starSystem.findMany();

    const starSystems = dataFromDB.map(
      (systemData) => new StarSystem(systemData.name, systemData.description),
    );

    return starSystems;
  }
  async findOne(name: string): Promise<StarSystem> {
    const dataFromDB = await prisma.starSystem.findUnique({
      where: { name: name },
    });

    return new StarSystem(dataFromDB.name, dataFromDB.description);
  }
  async create(data: StarSystem): Promise<StarSystem> {
    const newPlanet = await prisma.starSystem.create({
      data: { name: data.name, description: data.description },
    });

    return new StarSystem(newPlanet.name, newPlanet.description);
  }
  async update(data: StarSystem, StarSystemName: string): Promise<StarSystem> {
    const updatedStarSystemData = await prisma.starSystem.update({
      where: { name: StarSystemName },
      data: { name: data.name, description: data.description },
    });

    return new StarSystem(
      updatedStarSystemData.name,
      updatedStarSystemData.description,
    );
  }
  async delete(name: string): Promise<StarSystem> {
    const deletedSystem = await prisma.starSystem.delete({
      where: { name: name },
    });

    return new StarSystem(deletedSystem.name, deletedSystem.description);
  }
}
