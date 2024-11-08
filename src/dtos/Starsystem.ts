export class StarSystem {
  public id?: string;
  public name: string;
  public description: string;
  public createdAt?: Date;
  public updateAt?: Date;

  constructor(starSystem: {
    id?: string;
    name: string;
    description: string;
    createdAt?: Date;
    updateAt?: Date;
  }) {
    this.id = starSystem.id;
    this.name = starSystem.name;
    this.description = starSystem.description;
    this.createdAt = starSystem.createdAt;
    this.updateAt = starSystem.updateAt;
  }

  toObject(): object {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updateAt: this.updateAt,
    };
  }
}
