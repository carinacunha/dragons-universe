import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  public fighter: Fighter;
  public environment: (Monster | Fighter | SimpleFighter) [];

  constructor(
    fighter: Fighter, 
    environment: (Monster | Fighter | SimpleFighter)[],
  ) {
    super(fighter);
    this.fighter = fighter;
    this.environment = environment;
  }

  public fight(): number {
    this.environment
      .every((elem) => {
        while (this.fighter.lifePoints > 0 && elem.lifePoints > 0) {
          this.fighter.attack(elem);
          elem.attack(this.fighter);
        }
        return this.fighter.lifePoints >= 0;
      });
    return super.fight();
  }
}