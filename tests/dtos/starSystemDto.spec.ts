import { StarSystem } from '../../src/dtos/Starsystem';

const createSut = () => {
  const data = {
    name: 'Tatooine',
    description: `A desert star system withh two planets,
    other next toa  neutrine star`,
  };
  return data;
};
describe('Star system DTO tests', () => {
  it('should be defined', () => {
    const sut = createSut();
    expect(new StarSystem(sut)).toBeDefined();
  });
});
