import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetypes {
  private _typeEnergy: EnergyType;
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._typeEnergy = 'stamina';
    Warrior.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.instances;
  }

  public get energyType(): EnergyType {
    return this._typeEnergy;
  }
}