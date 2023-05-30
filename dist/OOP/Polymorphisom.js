"use strict";
// class Person {
//   takNap(): void {
//     console.log("I am a person");
//   }
// }
// class Student extends Person {
//   takNap(): void {
//     console.log("I am a student");
//   }
// }
// class Developer extends Person {
//   takNap(): void {
//     console.log("I am Develop");
//   }
// }
// function getNap(Param: Person) {
//   Param.takNap();
// }
// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();
// console.log("mmk");
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getAreaOfCircle() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangular extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
