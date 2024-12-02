import { Service } from '../services/interfaces/Service';
import { CharactersDTO } from '../dtos/Characters';
import { Request, Response } from 'express';
export class CharactersController {
  constructor(private service: Service<CharactersDTO>) {}

  async index(req: Request, res: Response) {
    try {
      const characters = await this.service.getAll();
      return res.status(200).json(characters);
    } catch (error) {
      return res.status(500).json({ error_message: error.message });
    }
  }
  async show(req: Request, res: Response) {
    try {
      const character = await this.service.findOne(req.params.name);

      return res.status(200).json(character);
    } catch (error) {
      return res.status(404).json({ error_message: error.message });
    }
  }
  async post(req: Request, res: Response) {
    try {
      const data = new CharactersDTO(req.body);

      const newChar = await this.service.createOne(data);

      return res.status(201).json(newChar);
    } catch (error) {
      return res.status(500).json({ error_message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const deletedChar = await this.service.deleteOne(req.params.name);
      return res.status(200).json(deletedChar);
    } catch (error) {
      return res.status(500).json({ error_message: error.message });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const data = new CharactersDTO(req.body);
      const updatedChar = await this.service.updateOne(req.params.name, data);
      return res.status(200).json(updatedChar);
    } catch (error) {
      return res.status(500).json({ error_message: error.message });
    }
  }
}
