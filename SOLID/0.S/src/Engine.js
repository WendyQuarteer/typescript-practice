import Tank from "./Tank";
var Engine = /** @class */ (function () {
    function Engine() {
        this._status = false; //changed the name EngineStatus into status
        this._miles = 0;
        this.FUEL_MILEAGE = 10; //the distance, measured in miles, that an engine can work depending on the amount of fuel.
        this._tank = new Tank(60); //instantiate Tank.
    }
    //METHODS:
    Engine.prototype.turnEngineOn = function () {
        this._status = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._status = false;
    };
    Engine.prototype.addMiles = function () {
        this._miles += this.FUEL_MILEAGE;
    };
    Engine.prototype.drive = function () {
        if (this.status === false || this.tank.fuel <= 0) { //what I am doing here is a good principle called "failing early"
            return;
        }
        this.tank.removeFuel();
        this.addMiles();
    };
    Object.defineProperty(Engine.prototype, "tank", {
        //GETTERS:
        get: function () {
            return this._tank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return Engine;
}());
export default Engine;
