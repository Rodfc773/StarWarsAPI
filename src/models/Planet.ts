export type PlanetSize = 'Small' | 'Medium' | 'Big' | 'Very big';

export class Planet {
  constructor(
    public name: string,
    public terrain: string,
    public size: PlanetSize,
    public population: number,
    public weather: string,
  ) {}

  toJson(): object {
    return {
      name: this.name,
      terrain: this.terrain,
      size: this.size,
      population: this.population,
    };
  }
}
