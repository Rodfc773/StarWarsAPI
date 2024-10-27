import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

import { Planet } from '../models/Planet';
import {
  DataBaseError,
  PlanetMissingDataError,
  PlanetNotFound,
} from '../utils/Errors';
import { ValidationPlanetData } from '../utils/Validations';

const prisma = new PrismaClient();

export class PlanetController {
  async index(req: Request, res: Response) {
    try {
      const planets = await prisma.planet.findMany();

      return res.json(planets);
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json(new DataBaseError('Unable to access the DataBase'));
    }
  }
  async post(req: Request, res: Response) {
    const { name, terrain, size, population, weather } = req.body;

    try {
      const planetData = new Planet(name, terrain, size, population, weather);
      const validatorData = new ValidationPlanetData();

      if (!validatorData.validationData(planetData)) {
        return res
          .status(400)
          .json(
            new PlanetMissingDataError(
              "Some data of the new planet is missing or it's null",
            ),
          );
      }
      const newPlanet = await prisma.planet.create({
        data: {
          name: planetData.name,
          terrain: planetData.terrain,
          size: planetData.size,
          population: planetData.population,
          weather: planetData.weather,
        },
      });

      return res.status(201).json(newPlanet);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json(new DataBaseError('Unable to create the new planet'));
    }
  }

  async show(req, res) {
    const { name } = req.params;

    try {
      const planet = await prisma.planet.findUnique({
        where: {
          name: name,
        },
      });

      if (!planet) throw new PlanetNotFound('That planet name do not exist');
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json(new DataBaseError('Unable to operate in the data base'));
    }
  }
}
