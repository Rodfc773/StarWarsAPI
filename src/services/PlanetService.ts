import { Repository } from 'src/repositories/interface/Repository';
import { Planet } from '../models/Planet';
import { DataBaseError, PlanetMissingDataError } from '../utils/Errors';
import { Service } from './interfaces/Service';
import { Validator } from 'src/utils/Validations';

export class PlanetService extends Service<Planet> {
  repository: Repository<Planet>;
  validator: Validator;

  constructor(repo: Repository<Planet>, val: Validator) {
    super();
    this.repository = repo;
    this.validator = val;
  }

  async getAll(): Promise<Planet[]> {
    return await this.repository.findall();
  }
  async createOne(data: Planet): Promise<Planet> {
    if (!this.validator.validationData(data))
      throw new PlanetMissingDataError(
        'Some important data is missing or it is null',
      );

    return await this.repository.create(data);
  }
  async findOne(name: string): Promise<Planet> {
    const planet = await this.repository.findOne(name);

    if (!planet) throw new DataBaseError('Planet no found');

    return planet;
  }
  async updateOne(name: string, data: Planet): Promise<Planet> {
    if (!this.validator.validationData(data))
      throw new PlanetMissingDataError(
        'Some important data is missing or it is null',
      );
    return await this.repository.update(data, name);
  }
  async deleteOne(name: string): Promise<Planet> {
    return await this.repository.delete(name);
  }
}
