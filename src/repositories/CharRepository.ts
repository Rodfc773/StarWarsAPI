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
    const foundChar = await prisma.character.findUnique({
      where: {
        name: charName,
      },
    });

    const planet = await prisma.planet.findUnique({
      where: {
        id: foundChar.originPlanetId,
      },
    });

    const planetDto = new PlanetDTO(planet);
    const formattedChar = new CharactersDTO(foundChar);

    formattedChar.originPlanet = planetDto;

    return formattedChar;
  }
  async create(data: CharactersDTO): Promise<CharactersDTO> {
    const createdChar = await prisma.character.create({
      data: data.creationData,
    });

    const originPlanet = await prisma.planet.findUnique({
      where: {
        id: createdChar.originPlanetId,
      },
    });

    const planetDto = new PlanetDTO(originPlanet);
    const formattedChar = new CharactersDTO(createdChar);
    formattedChar.originPlanet = planetDto;

    return formattedChar;
  }
  async update(data: object, name: string): Promise<CharactersDTO> {
    const updatedChar = await prisma.character.update({
      where: {
        name: name,
      },
      data: data,
    });

    const originPlanet = await prisma.planet.findUnique({
      where: {
        id: updatedChar.originPlanetId,
      },
    });

    const planetDto = new PlanetDTO(originPlanet);
    const formattedChar = new CharactersDTO(updatedChar);
    formattedChar.originPlanet = planetDto;

    return formattedChar;
  }
  async delete(charName: string): Promise<CharactersDTO> {
    const deletedChar = await prisma.character.delete({
      where: {
        name: charName,
      },
    });

    return new CharactersDTO(deletedChar);
  }
}
