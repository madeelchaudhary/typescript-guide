// ## using function keyword

/* syntax: 
function fun(arg1: type, arg2 = 'str', arg3?: string): returntype (mostly typescript guesses the correct return type using type inference) {
    return matches returntype
}

Optional parameters are dentoted with (?)
Default parameters are assigned a default value (and their types are inferred from default value)

just defining the function type
function add(a: string, b: string): string;
 */

function sum(num1: number, num2: number): void {
  //   return num1 + num2;
}

// ## function expression or arrow function
// parameter names are just for reference not important to match paramter names
let sum2: (num1: number, num2: number) => number;

sum2 = (number1, number2) => number1 + number2;

// Custom function type
type Sum = (num1: number, num2: number) => number;

let sum3: Sum = (number1, number2) => number1 + number2;

let sum4: typeof sum;

// Generic function type (can store function of any type)
let fun: Function;

// Function overloads allow you to work with multiple parameters and types. As typescript can't distinguish the return type of function with multiple types

type Combinable2 = number | string;

function add(a: string): string;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: number): number;
function add(a: Combinable2, b?: Combinable2) {
  if (!b) {
    return a.toString();
  }

  if (typeof a === "number" && typeof b === "number") return a + b;

  return a.toString() + b.toString();
}

const result = add("john", 5);

result.split(""); // without overloading the return type will be string | number
