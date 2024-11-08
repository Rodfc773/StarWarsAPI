import { UserDTO } from '../dtos/User';
import { Service } from './interfaces/Service';
import { Repository } from '../repositories/interface/Repository';
import { DataBaseError, UserMissingDataError } from '../utils/Errors';
import { Validator } from '../utils/Validations';

export class UserService extends Service<UserDTO> {
  constructor(repository: Repository<UserDTO>, validator: Validator) {
    super();
    this.repository = repository;
    this.validator = validator;
  }

  async getAll(): Promise<UserDTO[]> {
    return await this.repository.findall();
  }
  async findOne(name: string): Promise<UserDTO> {
    const user = await this.repository.findOne(name);

    if (!user) throw new DataBaseError('User not found');

    return user;
  }
  async createOne(data: UserDTO): Promise<UserDTO> {
    if (!this.validator.validationData(data))
      throw new UserMissingDataError("Some data's field are missing");

    if (!this.validator.validateEmail(data.email))
      throw new UserMissingDataError('Invalid email');

    return await this.repository.create(data);
  }
  async updateOne(name: string, data: UserDTO): Promise<UserDTO> {
    const user = await this.repository.update(data, name);

    if (!user) throw new DataBaseError('User not found');

    return user;
  }
  async deleteOne(name: string): Promise<UserDTO> {
    const user = await this.repository.delete(name);

    if (!user) throw new DataBaseError('User not found');

    return user;
  }
}
