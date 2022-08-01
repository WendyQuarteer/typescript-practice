export default class Tank {
    private _fuel: number = 0;
    private readonly MAXIMUM_FUEL_CAPACITY: number;//the amount of fuel that can be pumped into the tank.

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    //METHODS:
    addFuel(fuel: number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    removeFuel() {
        this._fuel -= 1;
    }

    //GETTERS:
    get fuel(): number {
        return this._fuel;
    }
}