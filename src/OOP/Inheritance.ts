// //parent class
// class Person {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   makeSleep(hours: number): string {
//     return `this ${this.name} will sleep for ${hours}`;
//   }
// }

// // first class
// class student extends Person {
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }
// }

// // second class
// class teacher extends Person {
//   designation: string;
//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }
// }

// // inherited the student-1,2,3,4
// console.log(new student("omar", 25, "pabna"));
// console.log(new student("faruq", 24, "pabna sadar"));
// console.log(new student("nahin", 28, "gaybandha"));
// console.log(new student("suhan", 27, "puthia"));

// // inherited the teacher- 1,2,3,4

// console.log(new teacher("aziz", 55, "mirpur", "lecturer"));
// console.log(new teacher("abdul", 45, "pollobi", "lecturer"));
// console.log(new teacher("joynal", 50, "madaripur", "junior Pro."));
// console.log(new teacher("munna", 35, "nukhaly", "lecturer"));
