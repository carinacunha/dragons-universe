import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public player1: Fighter;
  public player2: Fighter;

  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this.player1 = p1;
    this.player2 = p2;
  }

  fight(): number {
    while (this.player1.lifePoints > 0 || this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    } 
    return super.fight();
  }
}
