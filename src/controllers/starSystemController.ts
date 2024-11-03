import { Request, Response } from 'express';

import { StarSystem } from 'src/models/Starsystem';
import { Service } from 'src/services/interfaces/Service';

export class StarSystemController {
  constructor(private service: Service<StarSystem>) {}

  async index(req: Request, res: Response) {
    try {
      const StarSystems = await this.service.getAll();

      return res.status(200).json(StarSystems);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
