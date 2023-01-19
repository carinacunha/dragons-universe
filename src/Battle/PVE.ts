import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  public player: Fighter;
  public environment: (Monster | Fighter | SimpleFighter) [];

  constructor(
    player: Fighter, 
    environment: (Monster | Fighter | SimpleFighter)[],
  ) {
    super(player);
    this.player = player;
    this.environment = environment;
  }

  fight(): number {
    this.environment
      .every((elem) => {
        while (this.player.lifePoints > 0 && elem.lifePoints > 0) {
          this.player.attack(elem);
          elem.attack(this.player);
        }
        return this.player.lifePoints >= 0;
      });
    return super.fight();
  }
}