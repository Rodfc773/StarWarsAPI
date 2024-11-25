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

  async createOne(data: CharactersDTO): Promise<CharactersDTO> {
    const createdChar = await this.repository.createOne(data);

    return createdChar;
  }

  async deleteOne(name: string): Promise<CharactersDTO> {
    const deletedChar = await this.repository.deleteOne(name);

    if (!deletedChar) throw new DataBaseError('Character does not exist');

    return deletedChar;
  }

  async updateOne(name: string, data: CharactersDTO): Promise<CharactersDTO> {
    const updatedChar = await this.repository.updateOne(name, data);

    if (!updatedChar) throw new DataBaseError('Character does not exist');

    return updatedChar;
  }
}
