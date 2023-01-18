import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetypes {
  private _typeEnergy: EnergyType;
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Mage.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.instances;
  }

  public get energyType(): EnergyType {
    return this._typeEnergy;
  }
}