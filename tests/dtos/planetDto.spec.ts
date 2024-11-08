import { PlanetDTO } from '../../src/dtos/Planet';

const createSut = () => {
  const data = {
    name: 'Tatooine',
    terrain: 'desert',
    size: 'very big',
    population: 200000,
    weather: 'hot',
  };
  return data;
};
describe('PlanetDto tests', () => {
  it('should be defined', () => {
    const sut = createSut();
    expect(new PlanetDTO(sut)).toBeDefined();
  });
});
