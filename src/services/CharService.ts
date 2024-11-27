import { CharactersDTO } from '../dtos/Characters';
import { Service } from './interfaces/Service';
import { CharacterMissingDataError, DataBaseError } from '../utils/Errors';
import { CharacterDataValidator } from '../utils/Validations';

export class CharService extends Service<CharactersDTO> {
  constructor(repository: CharactersDTO, validator: CharacterDataValidator) {
    super();
    this.repository = repository;
    this.validator = validator;
  }
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
    if (!this.validator.validationData(data))
      throw new CharacterMissingDataError('There are missing fields');

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
