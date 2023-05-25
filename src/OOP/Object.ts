// 1) class 2)constructor 3) pure function 4 instance

//class
class mane {
  name: string;
  age: number;
  position: string;

  // constructor
  constructor(name: string, age: number, position: string) {
    (this.name = name), (this.age = age), (this.position = position);
  }

  // pure function
  faruq1() {
    console.log(
      `my name is ${this.name} and my position ${this.position} etc.`
    );
  }
}

//instance
const abc = new mane("omar Faruq", 25, "MERN Stack Developer");
abc.faruq1();
