# Classes in TypeScript

Classes are blueprints for objects. Classes can be used to create multiple objects with the same structure. Classes can also be used to create objects with methods. Classes can be extended from other classes. Classes can also implement interfaces.

**Syntax:**

```ts
class Person {
  initialName = "John Doe"; // TypeScript will convert the field into property as well
  age: number;

  constructor(public name: string, userAge: number) {
    // name is shorthand initialization property
    this.age = userAge;
  }

  matchThis(this: Person) {} // Function must be invoked by an object that matches the type
}

const person = new Person("John", 32);
```

## Access Modifiers

Access modifiers are used to control the access of properties and methods of a class. Access modifiers can be applied to properties, methods, and constructors.

- `public` (default): Accessible everywhere
- `private`: Accessible only within the class
- `protected`: Accessible within the class and classes derived from it

```ts
class Person {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    console.log(this.name); // Error: Property 'name' is private and only accessible within class 'Person'
    console.log(this.age); // OK
  }
}
```

## Getters and Setters

Getters and setters are used to get and set the value of a property. Getters and setters are also known as accessor properties.

```ts
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const person = new Person("John");

console.log(person.name); // John

person.name = "Doe";

console.log(person.name); // Doe
```

## Abstract Classes

Abstract classes are used to define the structure of derived classes. Abstract classes cannot be instantiated. Abstract methods must be implemented in derived classes.

```ts
abstract class Department {
  readonly id: string; // Property is read-only (in case of access modifier readonly must be followed by access modifier)
  name: string;
  protected employees: string[] = [];

  constructor(name: string, id?: string) {
    this.name = name;
    this.id = id || Date.now().toString();
  }

  insertEmployee(em: string) {
    this.employees.push(em);
  }

  printEmployeeInfo(): void {
    console.log(this.employees);
  }

  abstract describe(this: Department): void;
}

// const accounting = new Department("Accounting"); Abstact classes are just for inheritance. You can't create instance

class ITDepartment extends Department {
  private admins: string[];

  get lastAdmin() {
    return this.admins[this.admins.length - 1];
  }

  constructor(id: string, admins: string[]) {
    super("IT", id);
    this.admins = admins;
  }

  insertAdmin(admin: string) {
    this.admins.push(admin);
  }

  describe(this: ITDepartment) {
    console.log(
      `Department has (${this.id}) id and (${this.admins.length}) admins`
    );
  }
}

const it1 = new ITDepartment("d1", ["Mike"]);
```

## Static Properties and Methods

Static properties and methods are used to access properties and methods without creating an instance of a class. Static properties and methods are accessed using the class name.

**Note:** Static properties and methods are not accessible from derived classes. `this` inside static methods are mapped to class not instance.

_Example:_ Static Fields and Members (And important implementation of passing data through classes):

```ts
class Products {
  prods = ["test 1", "test 2"];

  constructor() {}
  addToCart() {
    App.onAddToCart();
  }
}

class Cart {
  addItemHandler() {}
}

class Shop {
  cart = new Cart();
  products = new Products();
}

class App {
  static shop: Shop;
  static onAddToCart: () => void;

  static init() {
    this.shop = new Shop();
    this.onAddToCart = this.shop.cart.addItemHandler;
  }
}

App.init();
```

## Singleton

A popular Design Pattern (singleton) can be easly implemented using private constructors and static members and properties

```ts
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    return (this.instance = new Singleton());
  }
}

const singleton = Singleton.getInstance();
```
