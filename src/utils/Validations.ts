import { StarSystem } from '@prisma/client';
import { Planet } from 'src/models/Planet';

export abstract class Validator {
  abstract validationData(data): boolean;
}

export class PlanetDataValidator extends Validator {
  validationData(data: Planet): boolean {
    if (!data.name) return false;
    if (!data.terrain) return false;
    if (!data.population) return false;
    if (!data.size) return false;
    if (!data.weather) return false;

    return true;
  }
}

export class StarSystemValidator extends Validator {
  validationData(data: StarSystem): boolean {
    if (!data.name) return false;
    if (!data.description) return false;

    return true;
  }
}
