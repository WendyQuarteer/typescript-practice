export default class MusicPlayer {

    private _musicLevel: number = 0;
    private _oldMusicLevel: number = 50;

    //METHODS:
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }

    //GETTERS:
    get musicLevel(): number {
        return this._musicLevel;
    }

    //SETTERS:
    set musicLevel(value: number) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
}