# Misc Types

## Enum Type

Enum (Enumerated Type) is a data type that is used to define a set of named constants.

```ts
enum Role {
  READ_WRITE,
  READ_ONLY,
}

// Enum with custom values
enum Role2 {
  READ_WRITE = 1,
  READ_ONLY = "READ_ONLY",
}
```

## any Type

Skip Typescript type checking not useful because it takes away all the powers of typescript

```ts
let anyVal;

anyVal = 3;
anyVal = true;
anyVal = "string";
anyVal = { name: "object name" };

// Explicitly define any type
let anyVal2: any;
```

## Union Type

Union of one or more types

```ts
let uni: boolean | number;
uni = false;
uni = 34;

let uniArr: (string | number)[] = [];
uniArr.push("string");
uniArr.push(34);
```

## Literal Type (specific primitive type)

It is used to define a specific primitive type

```ts
let litStatus: "online" | "offline";
litStatus = "offline";

let litTruthy: true | 1 | "true";

litTruthy = 1;
```

## unkown type

It is much same as any but typescript not completely skip type checking for unknown type

```ts
let unkVar: unknown;
unkVar = 37;

if (typeof unkVar === "number") {
  console.log(unkVar.toString());
}

// unkVar.toString(); // Error: Object is of type 'unknown'.
```

## Type Aliases (used to create custom types)

Type aliases are used to create a new name for a type. It is also used to create union types, tuples, etc.

**Syntax:**

```ts
type typeName = // your type here..
```

```ts
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
```

## never type

It is used to define that a statement never return anything like (program crashes, infinite loop, etc)

```ts
function generateError(message: string, code: number) {
  throw {
    message,
    errorCode: code,
  };
}

generateError("Something went wrong!", 500);
```

## Intersection Type

Intersection type combines multiple types into single type. In case of objects intersection is combination of objects. And in unions intersection is common type.

```ts
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
```

**In case of uinons**

```ts
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
```
