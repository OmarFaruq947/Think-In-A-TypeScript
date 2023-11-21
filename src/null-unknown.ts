// null type

const abc = (name: string | null): string => {
  return `my name is ${name}`;
};

// console.log(abc("omar"));
// console.log(abc("faruq"));

// unknown type
const abc_xyz = (name: unknown): string => {
  return `my name is ${name}`;
};

console.log(abc_xyz("omar"));
console.log(abc_xyz(25));
console.log(abc_xyz(null));
console.log(abc_xyz(undefined));
console.log(abc_xyz(true));
console.log(abc_xyz(false));
