# Think-In-A-TypeScript

### TypeScript installation process step-by-step

- typeScript install with globally

```
npm i -g typescript
```

- typeScript install with Dev-dependency

```
npm i typescript --save-dev
```

The compiler is installed in the node_modules directory and can be run with: npx tsc.

```
npx tsc
```

change the rootDir & outDir, if is required, so you can change ECMA script version, okay.

### what is typescript:

typescript is a programming language, it is a superset of JavaScript. it developed by Microsoft . this means, any JavaScript code is valid in typescript code. but, typescript is mostly extended JavaScript by adding static type declaration.

#### key features of typescript:

1. static-typing
2. Enums
3. generic type
4. class
5. modules
6. interface
7. compilations etc.

### what is TypeScript Compiler:

- TypeScript is transpiled into JavaScript Using A compiler.
- TypeScript being converted into JavaScript means it runs anywhere that JavaScript runs!

### How many type of typescript? and with example.

1. Boolean: Boolean value only provide true or false

```js
let isBoolean: boolean = true;
```

2. Number: Number is the all numeric values

```js
let isNumber: number = 101;
```

3. String: String is the character,which is placed dabble quotation

```js
let isString: string = "omar faruq";
```

4. Array: array is a special type of object in javaScript

```js
let num_array: number[] = [1, 2, 3, 4];
```

```js
let str_array: string[] = ["omar", "faruq", "lincon hassan"];
```

```js
let array: any[] = [1, 2, "omar", false];
```

```
crucial Note:
any type is not demand specific type. it can be any type, number, string, boolean etc.
```

5. Tuple: tuple takin the only two value pair, its like couple. it can be string-number, number-boolean, string-boolean.

```js
let tuple1: [string, number] = ["omar", 5];
```

```js
let tuple2: [string, boolean] = ["omar", false];
```

6. Enum: Enum is a special class that represents a collection of constraints. it is **unchangeable variable**. enum alleys accept **string & numeric value**

```js
enum secretCode {
  East, // default enums
  number = 125789, // initialized value
  token = "njnmkwpw_n@m", // string enums
}
console.log(secretCode.number);

```

7. Any: any is a type that disables type checking and effectively allows all types to be used.

```js
let notSure: any = 4;
```

8. Void: The void type is often used as the return type of functions that do not return a value.

```js
function soothing(): void {
  console.log("hi, I am void, be carful");
}
```

9. Null & Undefined: null & undefined is a primitive types. it is a very important and confusing topics of javaScript.

```js
let u: undefined = undefined;
let n: null = null;
```

10. Never: The never type represents values that never occur. For example, a function that always throws an exception or never returns.

```js
function error(message: string): never {
  throw new Error(message);
}
```

11. Object: In TypeScript, object is the type of all non-primitive values (primitive values are undefined, null, booleans, numbers, bigints, strings). With this type, we can’t access any properties of a value.

```js
function greet(person: { name: string, age: number }) {
  return "Hello " + person.name;
}
```
