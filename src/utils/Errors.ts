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

export class PlanetNotFound extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'PlanetNotFound';
  }
}
