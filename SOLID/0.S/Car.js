"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Engine_1 = __importDefault(require("./Engine"));
const MusicPlayer_1 = __importDefault(require("./MusicPlayer"));
class Car {
    constructor() {
        this._musicPlayer = new MusicPlayer_1.default(); //instantiate MusicPlayer.
        this._engine = new Engine_1.default(); //instantiate Engine.
    }
    //GETTERS:
    get musicPlayer() {
        return this._musicPlayer;
    }
    get engine() {
        return this._engine;
    }
}
exports.default = Car;
