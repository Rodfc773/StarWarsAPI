import { UserDTO } from '../../src/dtos/User';

const createSut = () => {
  const data = {
    name: 'Luke Skywalker',
    email: 'luke@skywalker.com',
    nickname: 'luke',
  };
  return data;
};

describe('UserDto tests', () => {
  it('should be defined', () => {
    const sut = createSut();
    expect(new UserDTO(sut)).toBeDefined();
  });
});
