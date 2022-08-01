import Car from "./Car";
///-----GLOBAL-VARIABLES-----///
const fuelLevelElement = <HTMLElement>document.querySelector('#fuel-level');
const musicToggleElement = <HTMLElement>document.querySelector('#music-toggle');
const musicSliderElement = <HTMLInputElement>document.querySelector('#music-slider');
const engineToggleElement = <HTMLInputElement>document.querySelector('#engine-toggle');
const audioElement = <HTMLAudioElement>document.querySelector('#car-music');
const addFuelForm = document.querySelector('#add-fuel-form');
const car = new Car();//instantiate Car.
const off = 'Turn music off';
const on = 'Turn music on';
///-----EVENTLISTENER-FOR-MUSIC-ON/OF-----///
musicToggleElement.addEventListener('click', () => {
    if(car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = off;
        return;
    }
    musicToggleElement.innerText = on;
    car.musicPlayer.turnMusicOff();
});
///-----EVENTLISTENER FOR MUSIC VOLUME-----///
musicSliderElement.addEventListener('input', (event) => {//I use input instead of change, because then the value changes when I move the mouse, not only on release
    let target = <HTMLFormElement>(event.target);
    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? off : on;
});
///-----EVENTLISTENER FOR ENGINE ON/OF-----///
engineToggleElement.addEventListener('click', () => {
    if(car.engine.status) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
///-----EVENTLISTENER FOR ADD-FUEL-----///
addFuelForm.addEventListener('submit', (event) => {
    const addFuelInput = <HTMLFormElement>document.querySelector('#add-fuel-input');
    event.preventDefault();
    car.engine.tank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.tank.fuel.toString();
});
///-----INTERVAL MILES + MUSIC-----///
setInterval(() => {
    const milesElement = <HTMLElement>document.querySelector('#miles-value');
    car.engine.drive();
    milesElement.innerText = <string><unknown>(car.engine.miles);// this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    fuelLevelElement.innerText = car.engine.tank.fuel.toString();// This .toString() will actually convert the value in JavaScript from an integer to a string
    if(car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    } else {
        audioElement.play();
    }
}, 1000);
