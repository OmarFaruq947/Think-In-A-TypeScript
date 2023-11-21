// simple alias
type age = number;
const student_age: age = 55;
// console.log(student_age);

//union type alias
type studentType = number | string;
const student_alias: studentType = "omar";
// console.log(student_alias);

//alias example with object
type student_info_type = {
  name: string;
  email: string;
  id: number;
  age: number;
};
const student_info: student_info_type = {
  name: "omar",
  email: "omar@gmail.com",
  id: 120,
  age: 25,
};
const student_info2: student_info_type = {
  name: "faruq",
  email: "faruq@gmail.com",
  id: 100,
  age: 295,
};
// console.log(student_info);

//function type alias
type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (a, b) => a + b;
// console.log(add(5, 6));

//generics type alias
type Pair<T, U> = { first: T; second: U };
const coordinates: Pair<number, number> = { first: 10, second: 20 };
console.log(coordinates);

//.....................................................................................

// interface
// interface applicable for only object. alias applicable all items, such as object, array, function etc

interface IUm {
  universityName: string;
  universityId: number;
  universityType: string;
  universityRank?: number;
}

const university: IUm = {
  universityName: "BAUET",
  universityId: 21,
  universityType: "mid",
  universityRank: 4,
};
console.log(university);
