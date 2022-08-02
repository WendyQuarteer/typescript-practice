import Engine from "./Engine";
import MusicPlayer from "./MusicPlayer";
var Car = /** @class */ (function () {
    function Car() {
        this._musicPlayer = new MusicPlayer(); //instantiate MusicPlayer.
        this._engine = new Engine(); //instantiate Engine.
    }
    Object.defineProperty(Car.prototype, "musicPlayer", {
        //GETTERS:
        get: function () {
            return this._musicPlayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
export default Car;
