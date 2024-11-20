import { CharactersDTO } from 'src/dtos/Characters';
import { Repository } from './interface/Repository';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CharRepository implements Repository<CharactersDTO> {
  async findall(): Promise<CharactersDTO[]> {
    throw new Error('Method not implemented.');
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
  delete(id: number): Promise<CharactersDTO> {
    throw new Error('Method not implemented.');
  }
}
