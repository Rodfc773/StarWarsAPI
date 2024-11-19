import { CharactersDTO } from 'src/dtos/Characters';
import { Repository } from './interface/Repository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CharRepository implements Repository<CharactersDTO> {
  async findall(): Promise<CharactersDTO[]> {
    const charactersFromDb = await prisma.character.findMany();

    const chars = charactersFromDb.map(async (characterFromDB) => {
      const dataDTO = new CharactersDTO(characterFromDB);
      const originPlanetName = await prisma.planet.findUnique({
        where: { id: characterFromDB.originPlanetId },
        select: { name: true },
      });
      dataDTO.planetName = originPlanetName.name;
      return dataDTO;
    });

    return Promise.all(chars);
  }
  async findOne(charName: string): Promise<CharactersDTO> {
    const charFromDB = await prisma.character.findUnique({
      where: { name: charName },
    });

    const originPlanetName = await prisma.planet.findUnique({
      where: { id: charFromDB.originPlanetId },
      select: { name: true },
    });

    const char = new CharactersDTO(charFromDB);

    char.planetName = originPlanetName.name;

    return char;
  }
  async create(data: CharactersDTO): Promise<CharactersDTO> {
    const originPlanetId = await prisma.planet.findUnique({
      where: { name: data.originPlanetName },
      select: { id: true },
    });

    data.planetId = originPlanetId.id;

    const newChar = await prisma.character.create({
      data: data.coreInformation,
    });

    return new CharactersDTO(newChar);
  }
  update(data: CharactersDTO, name: string): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
  delete(name: string): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
}
