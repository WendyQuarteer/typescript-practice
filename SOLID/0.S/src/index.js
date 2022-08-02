import Car from "./Car";
///-----GLOBAL-VARIABLES-----///
var fuelLevelElement = document.querySelector('#fuel-level');
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var audioElement = document.querySelector('#car-music');
var addFuelForm = document.querySelector('#add-fuel-form');
var car = new Car(); //instantiate Car.
var off = 'Turn music off';
var on = 'Turn music on';
///-----EVENTLISTENER-FOR-MUSIC-ON/OF-----///
musicToggleElement.addEventListener('click', function () {
    if (car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = off;
        return;
    }
    musicToggleElement.innerText = on;
    car.musicPlayer.turnMusicOff();
});
///-----EVENTLISTENER FOR MUSIC VOLUME-----///
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? off : on;
});
///-----EVENTLISTENER FOR ENGINE ON/OF-----///
engineToggleElement.addEventListener('click', function () {
    if (car.engine.status) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
///-----EVENTLISTENER FOR ADD-FUEL-----///
addFuelForm.addEventListener('submit', function (event) {
    var addFuelInput = document.querySelector('#add-fuel-input');
    event.preventDefault();
    car.engine.tank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.tank.fuel.toString();
});
///-----INTERVAL MILES + MUSIC-----///
setInterval(function () {
    var milesElement = document.querySelector('#miles-value');
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
