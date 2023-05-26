"use strict";
// type-guard
// keyof guard
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
console.log(add("4", "5"));
console.log(add(1, 2));
function getUser(user) {
    if ("role" in user) {
        return `I am admin and my role is = '${user.role}'`;
    }
    else {
        return `I am normal user`;
    }
}
const normalUser1 = { name: "mr.kallu" };
const adminUserType = { name: "mr.kallu", role: "admin" };
console.log(getUser(adminUserType));
//instance of guard
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`I am making sound`);
    }
}
class dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeDog() {
        console.log(`I am a Dog ${this.species}`);
    }
}
class cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeCat() {
        console.log(`I am a Cat ${this.species}`);
    }
}
function getAnimal(animal) {
    if (animal instanceof dog) {
        animal.makeDog();
    }
    else if (animal instanceof cat) {
        animal.makeCat();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new dog("jurman", "gheu gheu");
const animal2 = new cat("bdCat", "meu meu meu");
getAnimal(animal1);
getAnimal(animal2);
