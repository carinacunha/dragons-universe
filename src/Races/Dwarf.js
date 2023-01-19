"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 80;
        Dwarf._instances += 1;
    }
    get name() {
        return this.name;
    }
    get dexterity() {
        return this.dexterity;
    }
    static createdRacesInstances() {
        return Dwarf._instances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Dwarf;
Dwarf._instances = 0;
