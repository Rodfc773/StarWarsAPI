import { Request, Response } from 'express';

import { Planet } from '../models/Planet';
import { PlanetService } from '../services/PlanetService';

export class PlanetController {
  private service = new PlanetService();
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
      return res.status(200).json(planet);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const deletedPlanet = await this.service.deleteOne(req.params.name);

      return res
        .status(200)
        .json({ msg: 'Planet deleted with successful', planet: deletedPlanet });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  async put(req, res) {
    const dataToBeUpdated = req.body;

    const planetToBeUpdated = new Planet(
      dataToBeUpdated.name,
      dataToBeUpdated.terrain,
      dataToBeUpdated.size,
      dataToBeUpdated.population,
      dataToBeUpdated.weather,
    );

    try {
      const planetUpdated = await this.service.updateOne(
        req.params.name,
        planetToBeUpdated,
      );

      return res.status(200).json(planetUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
