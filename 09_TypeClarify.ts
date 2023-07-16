/* 
// ## Type Guards (Type guards are used to check the type of variable before using it)
*/

// ## Type Guards (using typeof)

function combine(arg1: number | string, arg2: number | string) {
  if (typeof arg1 === "number" && typeof arg2 === "number") return arg1 + arg2;

  return arg1.toString() + arg2.toString();
}

// Type Guard (using in keyword) distinguish types using a unique key

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
}

// Type Guard (using instanceof operator). To just check type instead of properties. Only used when you create object using classes or constructors.

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

// ## Discriminated Union

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

// Another example

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

// ## Type Casting (where Typescript can't identify the type correctly and you want to clearify the type)

const inputField1 = <HTMLInputElement>document.getElementById("input-el"); // Using angle brackets. syntax clashes with jsx

const inputField2 = document.getElementById("input-el") as HTMLInputElement;

// Type casting when using a variable or identifiers

const inputField3 = document.getElementById("input-el");

(inputField3 as HTMLInputElement).value;

// ## Non Null Assertion Operator (Tells typescript that an expression that can be null. Will not be null)

const mainElem = document.getElementById("main-elem")!;
