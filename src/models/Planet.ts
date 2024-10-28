export type PlanetSize = 'Small' | 'Medium' | 'Big' | 'Very big';

export class Planet {
  constructor(
    public name: string,
    public terrain: string,
    public size: string,
    public population: number,
    public weather: string,
  ) {}

  toJson() {
    return {
      name: this.name,
      terrain: this.terrain,
      size: this.size,
      population: this.population,
    };
  }
}
