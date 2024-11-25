import { CharactersDTO } from 'src/dtos/Characters';
import { Repository } from './interface/Repository';
import { PrismaClient } from '@prisma/client';
import { PlanetDTO } from 'src/dtos/Planet';

const prisma = new PrismaClient();

export class CharRepository implements Repository<CharactersDTO> {
  async findall(): Promise<CharactersDTO[]> {
    const data = await prisma.character.findMany();

    const chars = await Promise.all(
      data.map(async (char) => {
        const planet = await prisma.planet.findUnique({
          where: {
            id: char.originPlanetId,
          },
        });

        const planetDto = new PlanetDTO(planet);
        const formattedChar = new CharactersDTO(char);

        formattedChar.originPlanet = planetDto;

        return formattedChar;
      }),
    );

    return chars;
  }
  async findOne(charName: string): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
  async create(data: object): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
  update(data: object, name: string): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
  delete(charName: string): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
}
