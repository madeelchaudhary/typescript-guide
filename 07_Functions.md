# Function Types

## General syntax

```ts
function fun(arg1: type, arg2 = 'str', arg3?: string): returntype {
  // (mostly typescript guesses the correct return type using type inference)
    return matches returntype
}

```

Optional parameters are dentoted with (?). Optional parameters must be after required parameters.

Default parameters are assigned a default value (and their types are inferred from default value). It is not necessary to specify the type of default parameters.

## Function Declaration

Just defining the function type without implementation.

```ts
function add(a: string, b: string): string;
```

A function that returns nothing has a return type of void.

```ts
function sum(num1: number, num2: number): void {
  // return num1 + num2; // Error: Type 'number' is not assignable to type 'void'.
}
```

## Function Expression or Anonymous Function

Parameter names are just for reference not important to match paramter names.

```ts
let sum2: (num1: number, num2: number) => number;

sum2 = (number1, number2) => number1 + number2;
```

## Custom Function Type

```ts
type Sum = (num1: number, num2: number) => number;

// Function Expression
let sum3: Sum = (number1, number2) => number1 + number2;

let sum4: typeof sum;
```

## Generic Function Type

Generic type can be used to create a function that can work with a variety of types.

```ts
let fun: Function;

fun = (a: number, b: number) => a + b;

fun = (a: string, b: string) => a + b;
```

## Function Overloads

Function overloads allow you to work with multiple parameters and types. As typescript can't distinguish the return type of function with multiple types

```ts
type Combinable = number | string;

function add(a: string): string;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: number): number;
function add(a: Combinable, b?: Combinable) {
  if (!b) {
    return a.toString();
  }

  if (typeof a === "number" && typeof b === "number") return a + b;

  return a.toString() + b.toString();
}

const result = add("john", 5); // without overloading the return type will be string | number

result.split("");
```
