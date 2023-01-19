"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 74;
        Orc.instances += 1;
    }
    static createdRacesInstances() {
        return Orc.instances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Orc;
Orc.instances = 0;
