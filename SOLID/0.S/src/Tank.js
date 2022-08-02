var Tank = /** @class */ (function () {
    function Tank(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    //METHODS:
    Tank.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Tank.prototype.removeFuel = function () {
        this._fuel -= 1;
    };
    Object.defineProperty(Tank.prototype, "fuel", {
        //GETTERS:
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    return Tank;
}());
export default Tank;
