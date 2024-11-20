import { PlanetDTO } from './Planet';

export class CharactersDTO {
  private _id: number;
  private _name: string;
  private _affiliation: string;
  private _race: string;
  private _originPlanet: PlanetDTO;

  constructor(data: {
    id?: number;
    name: string;
    affiliation: string;
    race: string;
    originPlanet: PlanetDTO;
  }) {
    this._id = data.id;
    this._name = data.name;
    this._affiliation = data.affiliation;
    this._race = data.race;
    this._originPlanet = data.originPlanet;
  }

  get fullInformation() {
    return {
      id: this._id,
      name: this._name,
      affiliation: this._affiliation,
      race: this._race,
      originPlanet: this._originPlanet,
    };
  }
}
