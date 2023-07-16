// A Generic type is connected to other type and indentifies what other type would be. So that Typescript would give better support
// Constraints define the rules for Generic types.

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedResult = merge({ name: "" }, { age: 18 });

// To explicitly specify the types of Generics
const mergedResult2 = merge<{ name: string }, { age: number }>(
  { name: "john" },
  { age: 34 }
);

// Generics in classes

type LifeParams = {
  length: number;
};

interface LifoReturn {
  isEmpty(): boolean;
  get size(): number;
}

class Lifo<U extends LifeParams> implements LifoReturn {
  private memory: U[] = [];
  isEmpty(): boolean {
    return this.memory.length === 0;
  }

  constructor(...args: U[]) {
    this.memory = args;
  }

  get size(): number {
    return this.memory.length;
  }

  remove() {
    return this.memory.pop();
  }

  insert(item: U) {
    this.memory.push(item);
  }
}

//

const lifo = new Lifo("str", "str 2");

lifo.remove();

// When you want to receive key of object as parameter use keyof operator(only work in typescript) or create generic type using keyof operator with extends keyword

function logKey<T extends object, U extends keyof T>(obj: T, key: U) {
  console.log(obj[key]);
}

function logKey2<T extends object>(obj: T, key: keyof T) {
  console.log(obj[key]);
}

logKey({ name: "", age: 34, info: "" }, "age");

function logProd(
  prod: { title: string; desc: string },
  key: keyof typeof prod
) {}

logProd(
  { title: "test product", desc: "Description for test product" },
  "desc"
);

// Built in Generic Types
type Custom = {
  name: string;
  age: number;
  info: string;
};

const obj2: Partial<Custom> = {};
obj2.name = "John Doe";

interface T extends Object {
  name: string;
  age: number;
}

const obj3: Readonly<T> = { name: "john doe", age: 38 };
// obj1.age = 34  cannot assign because it is readonly type
/* 
 Readonly<string[]>
 
*/
