import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetypes {
  private _typeEnergy: EnergyType;
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Necromancer.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }

  public get energyType(): EnergyType {
    return this._typeEnergy;
  }
}