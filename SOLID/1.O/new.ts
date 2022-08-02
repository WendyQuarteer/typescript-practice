interface Sound {
     makeSound(): string;
}
///---MONKEY-----//
class Monkey implements Sound{
    //PROPERTIES:
    private _name: string;
    private _type: string

    constructor(name: string) {
        this._name = name;
        this._type = "monkey";
    }
    //METHODS:
    public makeSound():string{
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
class Dog implements Sound{
    //PROPERTIES:
    private _name: string;
    private _type: string

    constructor(name: string) {
        this._name = name;
        this._type = "dog";
    }
    //METHODS:
    public makeSound():string{
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
class Cat implements Sound{
    //PROPERTIES:
    private _name: string;
    private _type: string

    constructor(name: string) {
        this._name = name;
        this._type = "cat";
    }
    //METHODS:
    public makeSound():string{
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
class Parrot implements Sound{
    //PROPERTIES:
    private _name: string;
    private _type: string

    constructor(name: string) {
        this._name = name;
        this._type = "parrot";
    }
    //METHODS:
    public makeSound():string{
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
    //PROPERTIES:
    private _animals : Array<Object> = new Array<Object>();
    //METHODS
    public addAnimal(animal: object) {
        this._animals.push(animal);
    }
    //GETTERS:
    get animals(): Array<Object> {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat('Mouse'));
zoo.addAnimal(new Dog('Haruki'));
zoo.addAnimal(new Parrot('Coco'));
zoo.addAnimal(new Monkey('Chanel'));
const target = <HTMLElement>document.querySelector('#target')
zoo.animals.forEach((animal) => {
    target.innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
})