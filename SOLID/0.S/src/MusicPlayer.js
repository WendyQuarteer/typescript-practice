"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MusicPlayer {
    constructor() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    //METHODS:
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
    //GETTERS:
    get musicLevel() {
        return this._musicLevel;
    }
    //SETTERS:
    set musicLevel(value) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
}
exports.default = MusicPlayer;
