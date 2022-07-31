import Tank from "./Tank";

export default class Engine {
    private _tank: Tank;//engine has a tank which has its own functionalities.
    private _status: boolean = false;//changed the name EngineStatus into status
    private _miles: number = 0;
    private readonly FUEL_MILEAGE: number = 10;//the distance, measured in miles, that an engine can work depending on the amount of fuel.

    constructor() {
        this._tank = new Tank(60);//instantiate Tank.
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
        if (this.status === false || this.tank.fuel <= 0) {//what I am doing here is a good principle called "failing early"
            return;
        }
        this.tank.removeFuel();
        this.addMiles();
    }

    //GETTERS:
    get tank(): Tank {
        return this._tank
    }

    get miles(): number {
        return this._miles;
    }

    get status(): boolean {
        return this._status;
    }
}

