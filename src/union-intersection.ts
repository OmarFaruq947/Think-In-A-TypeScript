// intersection
// In TypeScript, an intersection type is a way to combine multiple types into a single type that has all the features of each component type. You use the "&" operator to create an intersection type.

type hero1 = {
  name: string;
  email: string;
};

type hero2 = hero1 & {
  age: number;
  id: number;
};

const omar_faruq: hero2 = {
  name: "omar",
  email: "omar@gmail.com",
  age: 25,
  id: 100,
};

// console.log(omar_faruq);

//------------------------------------------------------------------------------------------------------------------------------------------

// Union
// In the context of TypeScript or other programming languages, a "union" typically refers to a union type, which is a type formed by combining multiple types. TypeScript uses the "|" (pipe) operator to create union types, indicating that a value can be of one type or another.

type hr1 = {
  name: string;
  email: string;
};

type hr2 = {
  age: number;
  id: number;
};

const md_omar: hr1 | hr2 = {
  name: "omar",
  email: "omar@gmail.com",
  age: 25,
  id: 1002,
};
console.log(md_omar);

// union ->  |
// intersection ->  &
