import { Request, Response } from 'express';

import { PlanetDTO } from '../DTOS/Planet';
import { Service } from 'src/services/interfaces/Service';

export class PlanetController {
  constructor(private service: Service<PlanetDTO>) {}

  async index(req: Request, res: Response) {
    try {
      const planets = await this.service.getAll();

      return res.status(200).json(planets);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
  async post(req: Request, res: Response) {
    const planetData = req.body;

    try {
      const newPlanet = await this.service.createOne(planetData);

      return res.status(201).json(newPlanet);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async show(req, res) {
    try {
      const planet = await this.service.findOne(req.params.name);
      return res.status(200).json(planet.toObject());
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const deletedPlanet = await this.service.deleteOne(req.params.name);

      return res.status(200).json({
        msg: 'Planet deleted with successful',
        planet: deletedPlanet.toObject(),
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async put(req, res) {
    const dataToBeUpdated = req.body;

    const planetToBeUpdated = new PlanetDTO(dataToBeUpdated);

    try {
      const planetUpdated = await this.service.updateOne(
        req.params.name,
        planetToBeUpdated,
      );

      return res.status(200).json(planetUpdated.toObject());
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
