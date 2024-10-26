import { Planet } from 'src/models/Planet';

export abstract class Validation {
  abstract validationData(data): boolean;
}

export class ValidationPlanetData extends Validation {
  validationData(data: Planet): boolean {
    if (!data.name) return false;
    if (!data.terrain) return false;
    if (!data.population) return false;
    if (!data.size) return false;
    if (!data.weather) return false;

    return true;
  }
}
