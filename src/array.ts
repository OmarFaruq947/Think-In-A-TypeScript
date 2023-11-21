const array1 = [1, 2, 3, 4, 5, 6];
const array2 = ["omar", "faruq", "lincon", "hasan"];
const array3 = ["kamrul", "islam", "selim", "reja"];

// JS spread operator
array2.push(...array3);
// console.log(array2);

// TS spread operator with function
function runCount(...score: number[]): number {
  let sum: number = 0;
  score.map((run) => {
    sum = sum + run;
  });
  return sum;
}
console.log(runCount(...array1));
// [NOTE :] if return type is missing, than you will write "void"
