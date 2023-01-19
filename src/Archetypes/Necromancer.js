"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._typeEnergy = 'mana';
        Necromancer.instances += 1;
    }
    static createdArchetypeInstances() {
        return Necromancer.instances;
    }
    get energyType() {
        return this._typeEnergy;
    }
}
exports.default = Necromancer;
Necromancer.instances = 0;
