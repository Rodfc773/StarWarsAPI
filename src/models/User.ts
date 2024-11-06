export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _nickname: string,
  ) {}

  get name(): Readonly<string> {
    return this._name;
  }
  get email(): Readonly<string> {
    return this._email;
  }
  get password(): Readonly<string> {
    return this._password;
  }
  get nickname(): Readonly<string> {
    return this._nickname;
  }
}
