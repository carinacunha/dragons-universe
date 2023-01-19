import { Mage } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Elf, Orc } from './Races';

const player1 = new Character('Azog');
const player2 = new Character('Legolas');
const player3 = new Character('Gandalf');

player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.map((battle) => battle.fight());
};

export { 
  player1, player2, player3,
  monster1, monster2,
  pvp, pve,
  runBattles,
};