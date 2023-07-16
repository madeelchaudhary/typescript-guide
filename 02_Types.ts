/* 
Every value in TypeScript has a type.
A type is a label that describes the properties and methods that a value has.

TypeScript types is categorized into:

  1). Primitive types
  2). Object types
*/

// ### Object or Reference Types

// ## object type (a group of key value pairs)
// # Type Inference
let person = {
  name: "john",
  age: 23,
};
console.log(person.name);

// # Generic type only specify that the value must be an object
let person2: object = {
  name: "john 2",
  age: 33,
};
// console.log(person2.name); accessing a property will result in error

// # Specific type defines the properties types (key type pair)
let person3: { name: string; age: number } = {
  name: "john 3",
  age: 40,
};

// # Nested Object Type
let person4: {
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

// ## Array Type (list of values)

// # Using Generic Type
let arr: Array<string> = ["string 1", "string 2"];

// # Using Array type

let arr2: (number | string)[] = [34, "string"];

// ## Tuple Type (Array with specifc length and data types)
let tuple: [boolean, string] = [true, "a string"];

// # As typescript can't know the exact length of array so array methods like push, unshift, ... are exception
tuple.push("destroy");

// # but you can't push or work with wrong data type
// tuple.push(3);

// Indexed Properties (when we don't know in advance how many properties the object is going to store but we are certain that properites are goint to store a specific value)

interface ErrorContainer {
  //id: number; // As it contain indexed properties with string types. The defined properties must match the indexed propery types
  [prop: string]: string;
}

// Optional Chaining (if you are not sure whether a property exists or not. because accessing something on undefined throws an error)

const obj: any = {};

obj?.data?.id;
