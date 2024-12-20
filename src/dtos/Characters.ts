import { PlanetDTO } from './Planet';

export class CharactersDTO {
  private _id: number;
  private _name: string;
  private _affiliation: string;
  private _race: string;
  private _originPlanet: PlanetDTO;
  private _originPlanetId: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(data: {
    id?: number;
    name: string;
    affiliation: string;
    race: string;
    createdAt?: Date;
    updatedAt?: Date;
    originPlanetId?: string;
  }) {
    this._id = data.id;
    this._name = data.name;
    this._affiliation = data.affiliation;
    this._race = data.race;
    this._originPlanetId = data.originPlanetId;
    this._createdAt = data.createdAt;
    this._updatedAt = data.updatedAt;
  }

  get fullInformation() {
    return {
      id: this._id,
      name: this._name,
      affiliation: this._affiliation,
      race: this._race,
      originPlanet: this._originPlanet,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }

  get creationData() {
    return {
      name: this._name,
      affiliation: this._affiliation,
      race: this._race,
      originPlanetId: this._originPlanetId,
    };
  }
  set originPlanet(planet: PlanetDTO) {
    this._originPlanet = planet;
  }
}
