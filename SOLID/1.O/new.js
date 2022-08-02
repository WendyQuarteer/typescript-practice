"use strict";
///---MONKEY-----//
class Monkey {
    constructor(name) {
        this._name = name;
        this._type = "monkey";
    }
    //METHODS:
    makeSound() {
        return 'Oe-oe-a-a';
    }
    //GETTERS:
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    //SETTERS:
    set name(value) {
        this._name = value;
    }
}
///-----DOG-----///
class Dog {
    constructor(name) {
        this._name = name;
        this._type = "dog";
    }
    //METHODS:
    makeSound() {
        return 'Woef';
    }
    //GETTERS:
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    //SETTERS:
    set name(value) {
        this._name = value;
    }
}
///-----CAT-----///
class Cat {
    constructor(name) {
        this._name = name;
        this._type = "cat";
    }
    //METHODS:
    makeSound() {
        return 'Miauw';
    }
    //GETTERS:
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    set name(value) {
        this._name = value;
    }
}
///-----PARROT-----///
class Parrot {
    constructor(name) {
        this._name = name;
        this._type = "parrot";
    }
    //METHODS:
    makeSound() {
        return 'I am a pirate';
    }
    //GETTERS:
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    set name(value) {
        this._name = value;
    }
}
///-----ZOO-----//
class Zoo {
    constructor() {
        //PROPERTIES:
        this._animals = new Array();
    }
    //METHODS
    addAnimal(animal) {
        this._animals.push(animal);
    }
    //GETTERS:
    get animals() {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat('Mouse'));
zoo.addAnimal(new Dog('Haruki'));
zoo.addAnimal(new Parrot('Coco'));
zoo.addAnimal(new Monkey('Chanel'));
const target = document.querySelector('#target');
zoo.animals.forEach((animal) => {
    target.innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});
