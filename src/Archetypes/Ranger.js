"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._typeEnergy = 'stamina';
        Ranger.instances += 1;
    }
    static createdArchetypeInstances() {
        return Ranger.instances;
    }
    get energyType() {
        return this._typeEnergy;
    }
}
exports.default = Ranger;
Ranger.instances = 0;
