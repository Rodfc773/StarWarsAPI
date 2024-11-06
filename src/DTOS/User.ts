export class UserDTO {
  private _id?: string;
  private _name: string;
  private _email: string;
  private _nickname: string;
  private _createdAt?: Date;
  private _updatedAt?: Date;

  constructor(user: {
    id: string;
    name: string;
    email: string;
    nickname: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this._id = user.id;
    this._name = user.name;
    this._email = user.email;
    this._nickname = user.nickname;
    this._createdAt = user.createdAt;
    this._updatedAt = user.updatedAt;
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
