// Interfaces just describe the structure of objects. Interfaces can also be extended whereas types cannot. You can extend an interface from multiple interfaces. You can also extend already created interface by defining it again.

interface Person {
  readonly id: string; // readonly modifier can be used to make a property readonly
  name: string;
  age: number;

  opt?: string; // optional properties are defined using ?
}

interface Greetable extends Person {
  greet(phrase: string): void;
}

// interfaces can be used to define types of classes using implements keyword. A class can only implement single interface. Class must match the defined properties in interface. You can also add additional properties and methods.

/* 
existing interface extending
*/

interface Window {
  user: Person;
}

window.user;

// Interface with anonymous functions are used to define function type

interface SumFun {
  (n1: number, n2: number): number;
}
