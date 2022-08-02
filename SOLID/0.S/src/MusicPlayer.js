var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    //METHODS:
    MusicPlayer.prototype.turnMusicOn = function () {
        this._musicLevel = this._oldMusicLevel;
    };
    MusicPlayer.prototype.turnMusicOff = function () {
        this._musicLevel = 0;
    };
    Object.defineProperty(MusicPlayer.prototype, "musicLevel", {
        //GETTERS:
        get: function () {
            return this._musicLevel;
        },
        //SETTERS:
        set: function (value) {
            this._musicLevel = value;
            this._oldMusicLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    return MusicPlayer;
}());
export default MusicPlayer;
