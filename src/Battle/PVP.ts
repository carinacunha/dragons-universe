import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public player1: Fighter;
  public player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    const lifePlayer1 = this.player1.lifePoints;
    const lifePlayer2 = this.player2.lifePoints;

    while (lifePlayer1 > 0 && lifePlayer2 > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    } 
    return super.fight();
  }
}
