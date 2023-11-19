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

```js
let tuple1: [string, number] = ["omar", 5];
```

```js
let tuple2: [string, boolean] = ["omar", false];
```

```
crucial Note:
1. tuple tack the only two value pair. it can be string-number, number-boolean, string-boolean.
2. any type is not demand specific type. it can be any type, number, string, boolean etc.
```
