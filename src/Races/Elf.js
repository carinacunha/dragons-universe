"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf._instances += 1;
    }
    static createdRacesInstances() {
        return Elf._instances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Elf;
Elf._instances = 0;
