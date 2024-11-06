export class PlanetDTO {
  public id: string;
  public name: string;
  public terrain: string;
  public size: string;
  public population: number;
  public weather: string;
  public createdAt: Date;
  public updateAt: Date;

  constructor(planet: {
    name: string;
    terrain: string;
    size: string;
    population: number;
    weather: string;
  }) {
    this.name = planet.name;
    this.terrain = planet.terrain;
    this.size = planet.size;
    this.population = planet.population;
    this.weather = planet.weather;
  }

  toObject(): object {
    return {
      id: this.id,
      name: this.name,
      terrain: this.terrain,
      size: this.size,
      weather: this.weather,
      createdAt: this.createdAt,
      updateAt: this.updateAt,
    };
  }
}
