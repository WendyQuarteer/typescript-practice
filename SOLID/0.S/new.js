"use strict";
///-----MUSIC-PLAYER-----//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
///-----ENGINE-----///
///-----TANK-----///
///-----CAR-----///
const Car_1 = __importDefault(require("./Car"));
///-----GLOBAL-VARIABLES-----///
const fuelLevelElement = document.querySelector('#fuel-level');
const musicToggleElement = document.querySelector('#music-toggle');
const musicSliderElement = document.querySelector('#music-slider');
const engineToggleElement = document.querySelector('#engine-toggle');
const audioElement = document.querySelector('#car-music');
const addFuelForm = document.querySelector('#add-fuel-form');
const car = new Car_1.default(); //instantiate Car.
///-----EVENTLISTENER-FOR-MUSIC-ON/OF-----///
musicToggleElement.addEventListener('click', () => {
    if (car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.musicPlayer.turnMusicOff();
});
///-----EVENTLISTENER FOR MUSIC VOLUME-----///
musicSliderElement.addEventListener('input', (event) => {
    let target = (event.target);
    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
///-----EVENTLISTENER FOR ENGINE ON/OF-----///
engineToggleElement.addEventListener('click', () => {
    if (car.engine.status) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
///-----EVENTLISTENER FOR ADD-FUEL-----///
addFuelForm.addEventListener('submit', (event) => {
    const addFuelInput = document.querySelector('#add-fuel-input');
    event.preventDefault();
    car.engine.tank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.tank.fuel.toString();
});
///-----INTERVAL MILES + MUSIC-----///
setInterval(() => {
    const milesElement = document.querySelector('#miles-value');
    car.engine.drive();
    milesElement.innerText = (car.engine.miles); // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    fuelLevelElement.innerText = car.engine.tank.fuel.toString(); // This .toString() will actually convert the value in JavaScript from an integer to a string
    if (car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
