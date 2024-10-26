import 'dotenv/config';

describe('Dotenv file', () => {
  it('Should print the Database Test username', () => {
    const sut = process.env.TEST_USERNAME;

    expect(sut).toBe('testUsername');
  });
});
