/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Car.ts":
/*!********************!*\
  !*** ./src/Car.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Engine */ \"./src/Engine.ts\");\n/* harmony import */ var _MusicPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MusicPlayer */ \"./src/MusicPlayer.ts\");\n\n\nvar Car = /** @class */ (function () {\n    function Car() {\n        this._musicPlayer = new _MusicPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); //instantiate MusicPlayer.\n        this._engine = new _Engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); //instantiate Engine.\n    }\n    Object.defineProperty(Car.prototype, \"musicPlayer\", {\n        //GETTERS:\n        get: function () {\n            return this._musicPlayer;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Car.prototype, \"engine\", {\n        get: function () {\n            return this._engine;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Car;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Car.ts?");

/***/ }),

/***/ "./src/Engine.ts":
/*!***********************!*\
  !*** ./src/Engine.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tank */ \"./src/Tank.ts\");\n\nvar Engine = /** @class */ (function () {\n    function Engine() {\n        this._status = false; //changed the name EngineStatus into status\n        this._miles = 0;\n        this.FUEL_MILEAGE = 10; //the distance, measured in miles, that an engine can work depending on the amount of fuel.\n        this._tank = new _Tank__WEBPACK_IMPORTED_MODULE_0__[\"default\"](60); //instantiate Tank.\n    }\n    //METHODS:\n    Engine.prototype.turnEngineOn = function () {\n        this._status = true;\n    };\n    Engine.prototype.turnEngineOff = function () {\n        this._status = false;\n    };\n    Engine.prototype.addMiles = function () {\n        this._miles += this.FUEL_MILEAGE;\n    };\n    Engine.prototype.drive = function () {\n        if (this.status === false || this.tank.fuel <= 0) { //what I am doing here is a good principle called \"failing early\"\n            return;\n        }\n        this.tank.removeFuel();\n        this.addMiles();\n    };\n    Object.defineProperty(Engine.prototype, \"tank\", {\n        //GETTERS:\n        get: function () {\n            return this._tank;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Engine.prototype, \"miles\", {\n        get: function () {\n            return this._miles;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Engine.prototype, \"status\", {\n        get: function () {\n            return this._status;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Engine;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Engine);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Engine.ts?");

/***/ }),

/***/ "./src/MusicPlayer.ts":
/*!****************************!*\
  !*** ./src/MusicPlayer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar MusicPlayer = /** @class */ (function () {\n    function MusicPlayer() {\n        this._musicLevel = 0;\n        this._oldMusicLevel = 50;\n    }\n    //METHODS:\n    MusicPlayer.prototype.turnMusicOn = function () {\n        this._musicLevel = this._oldMusicLevel;\n    };\n    MusicPlayer.prototype.turnMusicOff = function () {\n        this._musicLevel = 0;\n    };\n    Object.defineProperty(MusicPlayer.prototype, \"musicLevel\", {\n        //GETTERS:\n        get: function () {\n            return this._musicLevel;\n        },\n        //SETTERS:\n        set: function (value) {\n            this._musicLevel = value;\n            this._oldMusicLevel = value;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return MusicPlayer;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MusicPlayer);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/MusicPlayer.ts?");

/***/ }),

/***/ "./src/Tank.ts":
/*!*********************!*\
  !*** ./src/Tank.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Tank = /** @class */ (function () {\n    function Tank(MAXIMUM_FUEL_CAPACITY) {\n        this._fuel = 0;\n        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;\n    }\n    //METHODS:\n    Tank.prototype.addFuel = function (fuel) {\n        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);\n    };\n    Tank.prototype.removeFuel = function () {\n        this._fuel -= 1;\n    };\n    Object.defineProperty(Tank.prototype, \"fuel\", {\n        //GETTERS:\n        get: function () {\n            return this._fuel;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Tank;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tank);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Tank.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ \"./src/Car.ts\");\n///-----MUSIC-PLAYER-----//\n///-----ENGINE-----///\n///-----TANK-----///\n///-----CAR-----///\n\n///-----GLOBAL-VARIABLES-----///\nvar fuelLevelElement = document.querySelector('#fuel-level');\nvar musicToggleElement = document.querySelector('#music-toggle');\nvar musicSliderElement = document.querySelector('#music-slider');\nvar engineToggleElement = document.querySelector('#engine-toggle');\nvar audioElement = document.querySelector('#car-music');\nvar addFuelForm = document.querySelector('#add-fuel-form');\nvar car = new _Car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); //instantiate Car.\nvar off = 'Turn music off';\nvar on = 'Turn music on';\n///-----EVENTLISTENER-FOR-MUSIC-ON/OF-----///\nmusicToggleElement.addEventListener('click', function () {\n    if (car.musicPlayer.musicLevel === 0) {\n        car.musicPlayer.turnMusicOn();\n        musicSliderElement.value = car.musicPlayer.musicLevel.toString();\n        musicToggleElement.innerText = off;\n        return;\n    }\n    musicToggleElement.innerText = on;\n    car.musicPlayer.turnMusicOff();\n});\n///-----EVENTLISTENER FOR MUSIC VOLUME-----///\nmusicSliderElement.addEventListener('input', function (event) {\n    var target = (event.target);\n    car.musicPlayer.musicLevel = target.value;\n    audioElement.volume = car.musicPlayer.musicLevel / 100;\n    musicToggleElement.innerText = car.musicPlayer.musicLevel ? off : on;\n});\n///-----EVENTLISTENER FOR ENGINE ON/OF-----///\nengineToggleElement.addEventListener('click', function () {\n    if (car.engine.status) {\n        car.engine.turnEngineOff();\n        engineToggleElement.innerText = 'Turn engine on';\n        return;\n    }\n    engineToggleElement.innerText = 'Turn engine off';\n    car.engine.turnEngineOn();\n});\n///-----EVENTLISTENER FOR ADD-FUEL-----///\naddFuelForm.addEventListener('submit', function (event) {\n    var addFuelInput = document.querySelector('#add-fuel-input');\n    event.preventDefault();\n    car.engine.tank.addFuel(Number(addFuelInput.value));\n    fuelLevelElement.innerText = car.engine.tank.fuel.toString();\n});\n///-----INTERVAL MILES + MUSIC-----///\nsetInterval(function () {\n    var milesElement = document.querySelector('#miles-value');\n    car.engine.drive();\n    milesElement.innerText = (car.engine.miles); // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number\n    fuelLevelElement.innerText = car.engine.tank.fuel.toString(); // This .toString() will actually convert the value in JavaScript from an integer to a string\n    if (car.musicPlayer.musicLevel === 0) {\n        audioElement.pause();\n    }\n    else {\n        audioElement.play();\n    }\n}, 1000);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;