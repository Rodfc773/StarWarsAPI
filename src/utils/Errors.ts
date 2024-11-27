export class DataBaseError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'DataBaseError';
  }
}
export class PlanetMissingDataError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'PlanetMissingDataError';
  }
}

export class UserMissingDataError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'UserMissingDataError';
  }
}

export class CharacterMissingDataError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'CharacterMissingDataError';
  }
}

export class PlanetNotFound extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'PlanetNotFound';
  }
}

export class StarSystemMissingDataError extends Error {
  constructor(public message) {
    super(message);
    this.name = 'StarSystemMissingData';
  }
}

export class StarSystemNotFound extends Error {
  constructor(public message) {
    super(message);
    this.name = 'StarSystemNotFound';
  }
}
