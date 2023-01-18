import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetypes {
  private _typeEnergy: EnergyType;
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._typeEnergy = 'stamina';
    Ranger.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.instances;
  }

  public get energyType(): EnergyType {
    return this._typeEnergy;
  }
}