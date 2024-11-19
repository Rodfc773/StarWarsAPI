export class CharactersDTO {
  private _id: number;
  private _name: string;
  private _affiliation: string;
  private _race: string;
  private _originPlanetName: string;
  private _originPlanetId: string;

  constructor(data: {
    id?: number;
    name: string;
    affiliation: string;
    race: string;
    originPlanetName?: string;
    originPlanetId?: string;
  }) {
    this._id = data.id;
    this._name = data.name;
    this._affiliation = data.affiliation;
    this._race = data.race;
    this._originPlanetName = data.originPlanetName;
    this._originPlanetId = data.originPlanetId;
  }

  get fullInformation() {
    return {
      id: this._id,
      name: this._name,
      affiliation: this._affiliation,
      race: this._race,
      originPlanet: this._originPlanetName,
      originPlanetId: this._originPlanetId,
    };
  }

  get coreInformation() {
    return {
      name: this._name,
      affiliation: this._affiliation,
      race: this._race,
      originPlanetName: this._originPlanetName,
      originPlanetId: this._originPlanetId,
    };
  }

  get originPlanetName() {
    return this._originPlanetName;
  }
  get originPlanetId() {
    return this._originPlanetId;
  }
  set planetId(id: string) {
    this._originPlanetId = id;
  }

  set planetName(name: string) {
    this._originPlanetName = name;
  }
}
