// this is a JS object (Object Literal Notation)
const student = {
  name: "omar",
  id: 123456,
  email: "bestbd@gmail.com",
  sub: "science",
  session: "10-12",
  district: "Dhaka",
  school: "Gov. College",
};

// evolution of typescript object step by step

// step-1
// we are defined type "object" but not show any issues. so, code is ok.
const student_ts: object = {
  name: "omar",
  id: 123456,
  email: "bestbd@gmail.com",
  sub: "science",
  session: "10-12",
  district: "Dhaka",
  school: "Gov. College",
};

// step-2
// we are type defined for each properties, so code is ok.
const ts_student: {
  name: string;
  id: number;
  email: string;
  age?: number;
  sub?: string; // "?" optional type
  session: string;
  readonly district: "Dhaka";
  school: string;
} = {
  name: "omar",
  id: 123456,
  email: "bestbd@gmail.com",
  age: 25,
  sub: "science",
  session: "10-12",
  district: "Dhaka",
  school: "Gov. College",
};
