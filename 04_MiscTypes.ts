// ## Enum Type
enum Role {
  READ_WRITE,
  READ_ONLY,
}

// # Custom values
enum Role2 {
  READ_WRITE = 1,
  READ_ONLY = "READ_ONLY",
}

// ## Any Type (Skip Typescript type checking not useful because it takes away all the powers of typescript)
let anyVal;

anyVal = 3;
anyVal = true;
anyVal = "string";
anyVal = { name: "object name" };

// # Explict assignment
let anyVal2: any;

// ## Union Type (Union of one or more types)
let uni: boolean | number;
uni = false;
uni = 34;

let uniArr: (string | number)[] = [];

// ## unkown type (It is much same as any but typescript not completely skip type checking for unknown)

let unkVar: unknown;
unkVar = 37;

if (typeof unkVar === "number") {
  console.log(unkVar.toString());
}

// ## Type Aliases (used to create custom types)

/* 
syntax
  type typeName = your type here..
*/

type User = {
  name: string;
  age: number;
  hobbies: string[];
};

let user1: User = {
  name: "Mike",
  age: 34,
  hobbies: [],
};

// ## never type (is used to define that a statement never return anything like (program crashes, infinite loop, etc.))

function generateError(message: string, code: number) {
  throw {
    message,
    errorCode: code,
  };
}

generateError("Something went wrong!", 500);

// ## Intersection Type (Intersection type combines multiple types into single type). In case of objects intersection is combination of objects. And in unions intersection is common type

type Employee = {
  name: string;
  age: number;
};

type Admin = Employee & {
  privileges: string[];
};

// or

type EmployeeRole = {
  privileges: string[];
};

type Admin2 = Employee & EmployeeRole;

// in case of uinons

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Skip type checking for next line with @ts-ignore
// @ts-ignore
user1.notExists = true; // Error: Property 'notExists' does not exist on type 'User'
