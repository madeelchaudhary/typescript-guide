# Generics in Typescript

A Generic type is connected to other type and indentifies what other type would be. So that Typescript would give better support. Constraints define the rules for Generic types.

## Generic Constraints

Two ways to define constraints

- `extends` keyword
- `keyof` operator

### `extends` keyword

extends keyword is used to define constraints for Generic types. It is used to specify that the Generic type must be a subtype of the specified type.

### `keyof` operator

keyof operator is used to define constraints for Generic types. It is used to specify that the Generic type must be a key of the specified type.

**Syntax:**

```ts
function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedResult = merge({ name: "" }, { age: 18 });

// To explicitly specify the types of Generics
const mergedResult2 = merge<{ name: string }, { age: number }>(
  { name: "john" },
  { age: 34 }
);
```

## Generic Classes

Generic classes are classes that can work with various types. Generic classes are useful when a class can work with multiple types of data.

```ts
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

lifo.insert("str 3");
```

## Generic Interfaces

Generic interfaces are interfaces that can work with various types. Generic interfaces are useful when an interface can work with multiple types of data.

```ts
interface LifoReturn<T> {
  isEmpty(): boolean;
  get size(): number;
  remove(): T | undefined;
  insert(item: T): void;
}
```

## Examples of Generic Types

When you want to receive key of object as parameter use keyof operator(only work in typescript) or create generic type using keyof operator with extends keyword

```ts
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
```
