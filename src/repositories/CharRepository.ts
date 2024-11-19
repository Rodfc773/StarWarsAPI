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
  findOne(name: string): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
  create(data: CharactersDTO): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
  update(data: CharactersDTO, name: string): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
  delete(name: string): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
}
