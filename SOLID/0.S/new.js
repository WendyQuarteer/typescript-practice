"use strict";
///-----MUSICPLAYER-----////////////////////////////////////////////////////////////////////////////////////////////////
class MusicPlayer {
    constructor() {
        //PROPERTIES:
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
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
    //METHODS:
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
}
///-----ENGINE-----/////////////////////////////////////////////////////////////////////////////////////////////////////
class Engine {
    //CONSTRUCTOR:
    constructor() {
        this._status = false; //changed the name EngineStatus into status
        this._miles = 0;
        this.FUEL_MILEAGE = 10; //the distance, measured in miles, that an engine can work depending on the amount of fuel.
        this._tank = new Tank(60); //instantiate Tank.
    }
    //GETTERS:
    get tank() {
        return this._tank;
    }
    get miles() {
        return this._miles;
    }
    get status() {
        return this._status;
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
}
///-----FUEL-----///////////////////////////////////////////////////////////////////////////////////////////////////////
class Tank {
    //CONSTRUCTOR:
    constructor(MAXIMUM_FUEL_CAPACITY) {
        //PROPERTIES:
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    //GETTERS:
    get fuel() {
        return this._fuel;
    }
    //METHODS:
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    removeFuel() {
        this._fuel -= 1;
    }
}
///-----CAR-----////////////////////////////////////////////////////////////////////////////////////////////////////////
class Car {
    //CONSTRUCTOR:
    constructor() {
        //PROPERTIES:
        this._musicPlayer = MusicPlayer; //musicPlayer has its own functionalities.
        this._engine = Engine; //engine has its own functionalities.
        this._musicPlayer = new MusicPlayer(); //instantiate MusicPlayer.
        this._engine = new Engine(); //instantiate Engine.
    }
    //GETTERS:
    get musicPlayer() {
        return this._musicPlayer;
    }
    get engine() {
        return this._engine;
    }
    //METHODS:
    drive() {
        if (this.engine.status === false || this.engine.tank.fuel <= 0) { //what I am doing here is a good principle called "failing early"
            return;
        }
        this.engine.tank.removeFuel();
        this.engine.addMiles();
    }
}
///-----GLOBAL-VARIABLES-----///////////////////////////////////////////////////////////////////////////////////////////
const fuelLevelElement = document.querySelector('#fuel-level');
const audioElement = document.querySelector('#car-music');
const musicToggleElement = document.querySelector('#music-toggle');
const musicSliderElement = document.querySelector('#music-slider');
const engineToggleElement = document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const car = new Car(); //instantiate Car.
//let volume = car.musicPlayer.musicLevel;
///-----EVENTLISTENER-FOR-MUSIC-ON/OF-----//////////////////////////////////////////////////////////////////////////////
musicToggleElement.addEventListener('click', () => {
    if (car.musicPlayer.musicLevel === 0) { //change to car.musicplayer.musicLevel
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.musicPlayer.turnMusicOff();
});
///-----EVENTLISTENER FOR MUSIC VOLUME-----////////////////////////////////////////////////////////////////////////////
musicSliderElement.addEventListener('input', (event) => {
    let target = (event.target);
    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
///-----EVENTLISTENER FOR ENGINE ON/OF-----/////////////////////////////////////////////////////////////////////////////
engineToggleElement.addEventListener('click', () => {
    if (car.engine.status) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
///-----EVENTLISTENER FOR ADD-FUEL-----/////////////////////////////////////////////////////////////////////////////////
addFuelForm.addEventListener('submit', (event) => {
    const addFuelInput = document.querySelector('#add-fuel-input');
    event.preventDefault();
    car.engine.tank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.tank.fuel.toString();
});
///-----INTERVAL MILES + MUSIC-----/////////////////////////////////////////////////////////////////////////////////////
setInterval(() => {
    const milesElement = document.querySelector('#miles-value');
    car.drive();
    milesElement.innerText = (car.engine.miles); // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    fuelLevelElement.innerText = car.engine.tank.fuel.toString(); // This .toString() will actually convert the value in JavaScript from an integer to a string
    if (car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
