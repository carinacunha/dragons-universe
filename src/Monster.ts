import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (this._lifePoints - damage <= 0) {
      this._lifePoints = -1;
    } return this._lifePoints;
  }
  
  attack(enemy: Fighter) {
    return enemy.receiveDamage(this._strength);
  }
}