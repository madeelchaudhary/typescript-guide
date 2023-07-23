# Type Narrowing and Type Casting

Type narrowing means narrowing down the type of a variable. It is used to make sure that the type of a variable is correct before using it.

**Some ways to narrow down the type of a variable:**

- Type Guards
- Discriminated Union
- Type Casting
- Type Predicate

## Type Guards

Type guards are used to check the type of variable before using it.

### typeof Type Guard

```ts
function combine(arg1: number | string, arg2: number | string) {
  if (typeof arg1 === "number" && typeof arg2 === "number") return arg1 + arg2;

  return arg1.toString() + arg2.toString();
}
```

### in Type Guard

Distinguish types using a unique key

```ts
type Employee = {
  name: string;
  age: number;
};

type Admin = Employee & {
  privileges: string[];
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
}
```

### instanceof Type Guard

Used to distinguish instance based on class

```ts
class Car {
  drive() {
    console.log("Driving Car");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck");
  }

  loadCargo(weigh: number) {
    console.log("Loading Cargo: ", weigh, "kg(s)");
  }
}

type Vehicle = Truck | Car;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
```

## Discriminated Union

Discriminated union is a pattern that helps typescript to narrow down the type of a variable.

```ts
interface Bird {
  flyingSpeed: number;
  type: "BIRDS";
}

interface Horse {
  runningSpeed: number;
  type: "HORSE";
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "BIRDS":
      // ...
      break;
    case "HORSE":
      // ...
      break;
    default:
    // ...
  }
}
```

In the above example, typescript can narrow down the type of animal variable based on the "type" property.

**Another example:**

```ts
type UserAttributes = {
  name: string;
  email: string;
  age: number;
};

type UserRoleAttributes =
  | {
      role: "admin";
      permissions: string[];
      superPassword: string;
    }
  | {
      role: "user";
      password: string;
    }
  | {
      role: "guest";
    };

type Usered = UserAttributes & UserRoleAttributes;

type Roled = UserRoleAttributes["role"];

function printUser(user: Usered) {
  if (user.role === "admin") {
    // ...
  }

  if (user.role === "user") {
    // ...
  }

  if (user.role === "guest") {
    // ...
  }
}
```

## Type Casting

Where Typescript can't identify the type correctly and you want to clearify the type.

```ts
const inputField1 = <HTMLInputElement>document.getElementById("input-el"); // Using angle brackets. syntax clashes with jsx

const inputField2 = document.getElementById("input-el") as HTMLInputElement;

// Type casting when using a variable or identifiers

const inputField3 = document.getElementById("input-el");

(inputField3 as HTMLInputElement).value;
```

### _Non Null Assertion Operator_

Tells typescript that an expression that can be null. Will not be null.

```ts
const mainElem = document.getElementById("main-elem")!;
mainElem.style.backgroundColor = "red";
```

## Type Predicate

Type predicate is a function that returns a boolean and helps typescript to narrow down the type of a variable in a conditional block.

```ts
function isString(value: any): value is string {
  return typeof value === "string";
}

interface User {
  name: string;
  email: string;
  age: number;
}

function printUserDetails(user: User | string) {
  if (isString(user)) {
    console.log(user.toUpperCase());
  } else {
    console.log(user.name);
  }
}
```
