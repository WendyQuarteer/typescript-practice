import Engine from "./Engine";
import MusicPlayer from "./MusicPlayer";

export default class Car {
    private _musicPlayer: MusicPlayer;//musicPlayer has its own functionalities.
    private _engine: Engine;//engine has its own functionalities.

    constructor() {
        this._musicPlayer = new MusicPlayer();//instantiate MusicPlayer.
        this._engine = new Engine();//instantiate Engine.
    }

    //GETTERS:
    get musicPlayer(): MusicPlayer {
        return this._musicPlayer;
    }

    get engine(): Engine {
        return this._engine;
    }
}
