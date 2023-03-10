import { Mage } from './Archetypes';
import Archetype from './Archetypes/Archetype';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this._dexterity = getRandomInt(1, 10);
    const raceCreated = new Elf(this.name, this._dexterity);
    this._race = raceCreated;
    const archetypeCreated = new Mage(this.name);
    this._archetype = archetypeCreated;
    this._maxLifePoints = raceCreated.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: archetypeCreated.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race { return this._race; }

  public get archetype(): Archetype { return this._archetype; }

  public get lifePoints(): number { return this._lifePoints; }

  public get strength(): number { return this._strength; }

  public get defense(): number { return this._defense; }

  public get dexterity(): number { return this._dexterity; }

  public get energy(): Energy { 
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (damage <= 0) this._lifePoints -= 1;
    if (this._lifePoints - damage <= 0) {
      this._lifePoints = -1;
    } return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    return enemy.receiveDamage(this._strength);
  }

  levelUp() {
    this._maxLifePoints += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;

    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
  }

  special(enemy: SimpleFighter) {
    return enemy.receiveDamage(this._strength * 2);
  }
}