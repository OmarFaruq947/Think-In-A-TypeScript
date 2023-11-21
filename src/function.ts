// normal function

function xyz() {
  return " hi i am a js normal function....";
}
console.log(xyz());
// typeScript function
function xyz_ts(name: string, num: number, comon = "nice to meet you"): string {
  return `Hi, Mr, ${name}. ${comon}, your id is: ${num}`;
}
console.log(xyz_ts("omar", 101));

// function with switch case
function calculator(num1: number, num2: number, operation: string): number {
  switch (operation) {
    case "sum":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mul":
      return num1 * num2;
    case "div":
      return num1 / num2;
    default:
      throw new Error("Invalid operation");
  }
}

const operation = "sub";
console.log(calculator(5, 6, operation));
