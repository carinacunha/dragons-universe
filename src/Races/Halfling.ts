import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _instances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}