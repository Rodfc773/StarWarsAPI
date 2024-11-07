import * as bcrypt from 'bcryptjs';

export class UserDTO {
  private _id?: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _nickname: string;
  private _createdAt?: Date;
  private _updatedAt?: Date;

  constructor(user: {
    id?: string;
    name: string;
    email: string;
    password?: string;
    nickname: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this._id = user.id;
    this._name = user.name;
    this._email = user.email;
    this._nickname = user.nickname;
    this.setPassword(user.password);
    this._createdAt = user.createdAt;
    this._updatedAt = user.updatedAt;
  }

  async setPassword(password: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 11);
    this._password = hashedPassword;
  }
  async verifyPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this._password);
  }

  toObject(): object {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      nickname: this._nickname,
      createdAt: this._createdAt,
      updateAt: this._updatedAt,
    };
  }

  get name(): Readonly<string> {
    return this._name;
  }
  get email(): Readonly<string> {
    return this._email;
  }
  get nickname(): Readonly<string> {
    return this._nickname;
  }
  get id(): Readonly<string> {
    return this._id;
  }
  get createdAt(): Readonly<Date> {
    return this._createdAt;
  }
  get updateAt(): Readonly<Date> {
    return this._updatedAt;
  }
}
