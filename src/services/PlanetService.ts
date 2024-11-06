import { Repository } from '../repositories/interface/Repository';
import { PlanetDTO } from '../DTOS/Planet';
import { DataBaseError, PlanetMissingDataError } from '../utils/Errors';
import { Service } from './interfaces/Service';
import { Validator } from '../utils/Validations';

export class PlanetService extends Service<PlanetDTO> {
  repository: Repository<PlanetDTO>;
  validator: Validator;

  constructor(repo: Repository<PlanetDTO>, val: Validator) {
    super();
    this.repository = repo;
    this.validator = val;
  }

  async getAll(): Promise<PlanetDTO[]> {
    return await this.repository.findall();
  }
  async createOne(data: PlanetDTO): Promise<PlanetDTO> {
    if (!this.validator.validationData(data))
      throw new PlanetMissingDataError(
        'Some important data is missing or it is null',
      );

    return await this.repository.create(data);
  }
  async findOne(name: string): Promise<PlanetDTO> {
    const planet = await this.repository.findOne(name);

    if (!planet) throw new DataBaseError('Planet no found');

    return planet;
  }
  async updateOne(name: string, data: PlanetDTO): Promise<PlanetDTO> {
    if (!this.validator.validationData(data))
      throw new PlanetMissingDataError(
        'Some important data is missing or it is null',
      );
    return await this.repository.update(data, name);
  }
  async deleteOne(name: string): Promise<PlanetDTO> {
    return await this.repository.delete(name);
  }
}
