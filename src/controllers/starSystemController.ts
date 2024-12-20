import { Request, Response } from 'express';

import { StarSystem } from '../dtos/Starsystem';
import { Service } from '../services/interfaces/Service';

export class StarSystemController {
  constructor(private service: Service<StarSystem>) {}
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const StarSystems: StarSystem[] = await this.service.getAll();

      return res.status(200).json(StarSystems);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async show(req: Request, res: Response): Promise<Response> {
    try {
      const starSystemName: string = req.params.name;

      const starSystemFound: StarSystem =
        await this.service.findOne(starSystemName);

      return res.status(200).json(starSystemFound);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async post(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const newStarSystem: StarSystem = await this.service.createOne(data);

      return res.status(201).json(newStarSystem.toObject());
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const starSystemName = req.params.name;

      const dataToBeUpdated = new StarSystem(data);

      const starSystemUpdated: StarSystem = await this.service.updateOne(
        starSystemName,
        dataToBeUpdated,
      );

      res.status(200).json(starSystemUpdated.toObject());
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const starSystemName = req.params.name;

      const starSystemDeleted: StarSystem =
        await this.service.deleteOne(starSystemName);

      return res.status(200).json(starSystemDeleted.toObject());
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
