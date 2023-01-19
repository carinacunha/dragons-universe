"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._typeEnergy = 'stamina';
        Warrior.instances += 1;
    }
    static createdArchetypeInstances() {
        return Warrior.instances;
    }
    get energyType() {
        return this._typeEnergy;
    }
}
exports.default = Warrior;
Warrior.instances = 0;
