# Object or Reference Types

## object type

A group of key value pairs

```ts
let person: {
  name: string;
  age: number;
} = {
  name: "john",
  age: 23,
};
console.log(person.name);
```

### Specific type defines the properties type (key type pair)

```ts
let person: { name: string; age: number } = {
  name: "john 3",
  age: 40,
};
```

### Generic type only specify that the value must be an object

We can't access the properties as typescript doesn't know the properties of the object. We can only assign an object to it.

```ts
let person: object = {
  name: "john 2",
  age: 33,
};

person = "string"; // Error: Type 'string' is not assignable to type 'object'.
console.log(person.name); // accessing a property will result in error
```

### Nested Object Type

```ts
let person: {
  name: string;
  age: number;
  hobbies: string[];
  friends: { name: string; age: number }[];
} = {
  name: "John",
  age: 32,
  hobbies: ["Cooking", "TV"],
  friends: [{ name: "Alisha", age: 37 }],
};

console.log(person.friends[0].name);
```

## Array Type

List of values

```ts
//  Using Generic Type
let arr: Array<string> = ["string 1", "string 2"];
```

```ts
//  Using Array type
let arr: (number | string)[] = [34, "string"];
```

## Tuple Type

Array with specifc length and data types

```ts
let tuple: [boolean, string] = [true, "a string"];
```

**As typescript can't know the exact length of array so array methods like push, unshift, ... are exception**

```ts
tuple.push("destroy");

// # but you can't push or work with wrong data type
tuple.push(3);
```

## Stict Array or Tuple Type

**Using readonly keyword**

```ts
let tuple: readonly [boolean, string] = [true, "a string"];

// # here you can't mutate the tuple
tuple.push("destroy");
```

**Using Readonly Generic Type**

```ts
let tuple: Readonly<[boolean, string]> = [true, "a string"];

// # here you can't mutate the tuple
tuple.push("destroy");
```
