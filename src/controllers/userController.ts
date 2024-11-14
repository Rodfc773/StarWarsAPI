import { Request, Response } from 'express';
import { UserDTO } from '../dtos/User';
import { Service } from '../services/interfaces/Service';
import { encryptPassword } from '../utils/encryptPassword';

export class UserController {
  constructor(private service: Service<UserDTO>) {}

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.service.getAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
  async show(req: Request, res: Response): Promise<Response> {
    try {
      const nickname: string = req.params.nickname;
      const user = await this.service.findOne(nickname);

      return res.status(200).json(user.toObject());
    } catch (e) {
      return res.status(404).json(e.message);
    }
  }
  async post(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const { password } = req.body;

      const dto = new UserDTO(data);

      dto.password = await encryptPassword(password);

      const user = await this.service.createOne(dto);

      return res.status(201).json(user.toObject());
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const nickname: string = req.params.nickname;
      const data = req.body;
      const userDto = new UserDTO(data);

      if ('password' in data) {
        userDto.password = await encryptPassword(userDto.password);
      }

      const user = await this.service.updateOne(nickname, userDto);

      return res.status(200).json(user.toObject());
    } catch (e) {
      return res.status(404).json(e.message);
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const nickname: string = req.params.nickname;

      const user = await this.service.deleteOne(nickname);

      res.status(200).json(user.toObject());
    } catch (e) {
      return res.status(400).json(e.message);
    }
  }
}
