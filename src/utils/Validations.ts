import * as validator from 'validator';

import { StarSystem } from '../dtos/Starsystem';
import { PlanetDTO } from '../dtos/Planet';
import { UserDTO } from '../dtos/User';

export abstract class Validator {
  abstract validationData(data): boolean;
}

export class PlanetDataValidator extends Validator {
  validationData(data: PlanetDTO): boolean {
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

export class UserDataValidator extends Validator {
  validationData(data: UserDTO): boolean {
    if (!data.name) return false;
    if (!data.email) return false;
    if (!data.nickname) return false;
    if (!data.password) return false;

    return true;
  }

  validateEmail(email: string): boolean {
    return validator.isEmail(email);
  }
}

export class CharacterDataValidator extends Validator {
  validationData(data): boolean {
    if (!data.name) return false;
    if (!data.affiliation) return false;
    if (!data.race) return false;
    if (!data.originPlaneName) return false;

    return true;
  }
}
