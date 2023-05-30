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
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getAreaOfCircle(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangular extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}
