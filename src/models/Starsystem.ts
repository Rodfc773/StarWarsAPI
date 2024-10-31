export class StarSystem {
  constructor(
    private _name: string,
    private _description: string,
  ) {}

  get name(): Readonly<string> {
    return this._name;
  }
  get description(): Readonly<string> {
    return this._description;
  }
}
