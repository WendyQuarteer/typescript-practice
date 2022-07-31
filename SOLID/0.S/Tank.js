"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tank {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    //METHODS:
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    removeFuel() {
        this._fuel -= 1;
    }
    //GETTERS:
    get fuel() {
        return this._fuel;
    }
}
exports.default = Tank;
