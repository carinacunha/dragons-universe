"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._typeEnergy = 'mana';
        Mage.instances += 1;
    }
    static createdArchetypeInstances() {
        return Mage.instances;
    }
    get energyType() {
        return this._typeEnergy;
    }
}
exports.default = Mage;
Mage.instances = 0;
