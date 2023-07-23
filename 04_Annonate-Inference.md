# Type Annotations vs Type Inference

## Type annotations

Code we add to tell Typescript what type of value a variable will refer to. Type annotations are used to define the type of variables, functions, classes, etc. Typescript uses the syntax :type

**Examples:**

```ts
const apples: number = 5; // apples is a variable of type number
const speed: string = "fast"; // speed is a variable of type string
const hasName: boolean = true; // hasName is a variable of type boolean
const nothing: undefined = undefined; // nothing is a variable of type undefined
const now: Date = new Date(); // now is a variable of type Date
const colors: string[] = ["red", "green", "blue"]; // colors is a variable of type array of strings
const point: { x: number; y: number } = {
  // point is a variable of type object with x and y properties of type number
  x: 10,
  y: 20,
};
```

_Here above we have explicitly defined the type of variables_

## Type inference:

Typescript tries to figure out what type of value a variable refers to (Typescript guesses the type) (Typescript uses type inference to give types to variables). Typescript tries to infer types when you don't explicitly annotate them.

**Examples:**

```ts
const apples = 5; // apples is a variable of type number
const speed = "fast"; // speed is a variable of type string
const hasName = true; // hasName is a variable of type boolean
const nothing = undefined; // nothing is a variable of type undefined
const now = new Date(); // now is a variable of type Date
const colors = ["red", "green", "blue"]; // colors is a variable of type array of strings
const allCaps = colors.map((color) => color.toUpperCase()); // typescript infers that color is of type string
const point = {
  // point is a variable of type object with x and y properties of type number
  x: 10,
  y: 20,
};
```

_Here above we have not explicitly defined the type of variables_

## When to use annotations

1. When we declare a variable on one line then initialize it later
2. When we want a variable to have a type that can't be inferred
3. When a function returns the 'any' type and we need to clarify the value

## When to use inference

1. You should always type inference unless you have a reason not to

## Contextual Typing

Typescript uses locations of where the type is used to infer the type of that variable. This is called contextual typing.

**Example:**

```ts
document.addEventListener("click", (e) => {
  console.log(e.button); // e is of type MouseEvent
});

document.addEventListener("scroll", (e) => {
  console.log(e.button); // e is of type ScrollEvent
});
```
