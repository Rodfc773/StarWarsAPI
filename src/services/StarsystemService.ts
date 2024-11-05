import { StarSystem } from '../models/Starsystem';
import { Service } from './interfaces/Service';
import { Repository } from '../repositories/interface/Repository';
import { Validator } from '../utils/Validations';
import { DataBaseError, StarSystemMissingDataError } from '../utils/Errors';

export class StarSystemService extends Service<StarSystem> {
  repository: Repository<StarSystem>;
  validator: Validator;

  constructor(repo: Repository<StarSystem>, validator: Validator) {
    super();
    this.repository = repo;
    this.validator = validator;
  }

  async getAll(): Promise<StarSystem[]> {
    return await this.repository.findall();
  }
  async createOne(data: StarSystem): Promise<StarSystem> {
    if (!this.validator.validationData(data))
      throw new StarSystemMissingDataError(
        "There some Star system's data missing",
      );

    return await this.repository.create(data);
  }
  async findOne(name: string): Promise<StarSystem> {
    const starSystem = await this.repository.findOne(name);

    if (!starSystem) throw new DataBaseError('Star system not found');

    return starSystem;
  }
  async updateOne(name: string, data: StarSystem): Promise<StarSystem> {
    if (!this.validator.validationData(data))
      throw new StarSystemMissingDataError('Some important data is missing');

    return await this.repository.update(data, name);
  }
  async deleteOne(name: string): Promise<StarSystem> {
    return await this.repository.delete(name);
  }
}
