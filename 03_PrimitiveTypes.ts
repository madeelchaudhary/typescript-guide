// ### Prmitive Types
// ## number (any number including integers and floating point numbers)
let num1: number = 343;
let num2: number;
num2 = 43;

function sumPr(number1: number, number2: number): number {
  return number1 + number2;
}

sumPr(num1, num2);

// ## string (characters enclosed in single or double quotes, or backticks)
let str = "a string";
let str2: string;
str = "a new string";
console.log(str + str2!);

// ## boolean (consist two values true or false)
let bool = true;
let bool2: boolean;
bool2 = 5 > 4;

// ## Literal Type (specific primitive type)

let litStatus: "online" | "offline";
litStatus = "offline";

let litTruthy: true | 1 | "true";

litTruthy = 1;

// ## undefined type
let unVar: undefined;

// ## null type

let nullVar: null;

// ## symbol type
let mySymbol: symbol = Symbol("");
