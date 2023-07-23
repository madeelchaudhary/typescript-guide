# Interfaces in TypeScript

Interfaces just describe the structure of objects. Interfaces can also be extended whereas types cannot. You can extend an interface from multiple interfaces. You can also expand already created interface by defining it again.

**Note:** Interfaces are used to describe the structure of objects. Interfaces cannot be used to describe the structure of primitives, unions, tuples, etc.

```ts
interface Person {
  readonly id: string; // readonly modifier can be used to make a property readonly
  name: string;
  age: number;

  opt?: string; // optional properties are defined using ?
}

interface Greetable extends Person {
  greet(phrase: string): void;
}
```

## Interface and Classes

Interfaces can be used to define the structure of classes. A class can implement multiple interfaces. A class can also implement an interface and extend another class at the same time.

```ts
interface User {
  name: string;
  age: number;
}

interface Greetable {
  greet(phrase: string): void;
}

class MyClass implements User, Greetable {
  constructor(public name: string, public age: number) {}

  greet(str: string) {
    console.log(str);
  }
}
```

## Interface and Functions

Interfaces can also be used to define the structure of functions. A function can implement multiple interfaces.

```ts
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
```

## Expand Interface

You can expand an interface by defining it again. This is useful when you want to add more properties to an interface.

```ts
interface Window {
  user: Person;
}

window.user;
```

## Indexed Properties (or Indexable Types)

When we don't know in advance how many properties the object is going to store but we are certain that properites are going to store a specific value type we can use indexed properties.

```ts
interface ErrorContainer {
  [prop: string]: string; // string indexable type
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};
```
