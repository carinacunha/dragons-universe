import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public fighter1: Fighter;
  public fighter2: Fighter;

  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
  }

  public fight(): number {
    const lifeFighter1 = this.fighter1.lifePoints;
    const lifeFighter2 = this.fighter2.lifePoints;

    while (lifeFighter1 > 0 && lifeFighter2 > 0) {
      this.fighter1.attack(this.fighter2);
      this.fighter2.attack(this.fighter1);
    } 
    return super.fight();
  }
}
