import { CharactersDTO } from 'src/dtos/Characters';
import { Service } from './interfaces/Service';
import { DataBaseError } from 'src/utils/Errors';

export class CharService extends Service<CharactersDTO> {
  async getAll(): Promise<CharactersDTO[]> {
    const chars = await this.repository.findall();

    return chars;
  }

  async findOne(name: string): Promise<CharactersDTO> {
    const foundChar = await this.repository.findOne(name);

    if (!foundChar) throw new DataBaseError('Character not found');

    return foundChar;
  }

  async createOne(data: CharactersDTO): Promise<CharactersDTO> {}
}
