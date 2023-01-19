"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this.name = name;
        this._dexterity = (0, utils_1.default)(1, 10);
        const raceCreated = new Races_1.Elf(this.name, this._dexterity);
        this._race = raceCreated;
        const archetypeCreated = new Archetypes_1.Mage(this.name);
        this._archetype = archetypeCreated;
        this._maxLifePoints = raceCreated.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._energy = {
            type_: archetypeCreated.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get race() { return this._race; }
    get archetype() { return this._archetype; }
    get lifePoints() { return this._lifePoints; }
    get strength() { return this._strength; }
    get defense() { return this._defense; }
    get dexterity() { return this._dexterity; }
    get energy() {
        return {
            type_: this._energy.type_,
            amount: this._energy.amount,
        };
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0)
            this._lifePoints -= damage;
        if (damage <= 0)
            this._lifePoints -= 1;
        if (this._lifePoints - damage <= 0) {
            this._lifePoints = -1;
        }
        return this._lifePoints;
    }
    attack(enemy) {
        return enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._lifePoints = this._maxLifePoints;
        this._strength += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
    }
    special(enemy) {
        return enemy.receiveDamage(this._strength * 2);
    }
}
exports.default = Character;
