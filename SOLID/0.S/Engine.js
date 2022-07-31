"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tank_1 = __importDefault(require("./Tank"));
class Engine {
    constructor() {
        this._status = false; //changed the name EngineStatus into status
        this._miles = 0;
        this.FUEL_MILEAGE = 10; //the distance, measured in miles, that an engine can work depending on the amount of fuel.
        this._tank = new Tank_1.default(60); //instantiate Tank.
    }
    //METHODS:
    turnEngineOn() {
        this._status = true;
    }
    turnEngineOff() {
        this._status = false;
    }
    addMiles() {
        this._miles += this.FUEL_MILEAGE;
    }
    drive() {
        if (this.status === false || this.tank.fuel <= 0) { //what I am doing here is a good principle called "failing early"
            return;
        }
        this.tank.removeFuel();
        this.addMiles();
    }
    //GETTERS:
    get tank() {
        return this._tank;
    }
    get miles() {
        return this._miles;
    }
    get status() {
        return this._status;
    }
}
exports.default = Engine;
