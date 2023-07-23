// Decorators are used to work with metadata.
/* 
Decorators can be used with:
  1). Classes (Receive 1 argument which is class/constructor function itself)
  2). Properties (Recieve 2 arguments, first is target which is prototype in case of instance property and class in case of static property, second is name of property)
  3). Methods (Receive 3 arguments, first 2 is same as above, third one is property descriptors)
  4). Accessors (same as above)
  5). Method Parameters (Receive 3 arguments, first is prototype/class, second is method name, third is parameter position)

Execution Order:
  parameter decorator is executed first
  all others except class decorator is executed in order
  class decorator is executed at end

Return Values:
  Class decorator can return a new constructor function that will override the class
  Method decorator can override the property descriptors (you can also change method by setting value property)
  Accessor decorator can also override the property descriptors (you can change getters/setters by overriding get/set properties)
*/

interface Dummy extends Persons {
  age: number;
}
function Logger<T extends { new (...arg: any[]): { name: string } }>(
  target: T
) {
  return class extends target {
    age: number;
    constructor(...arg: any[]) {
      super();
      this.age = 34;
      this.name = "Max";
    }
  };
}

function Logger2(identifier: string) {
  return (arg1: any, arg2: any, arg3?: any) => {
    console.log("Logger 2 for " + identifier);
    console.log(arg1, arg2);
    if (arg3 !== undefined || arg3 !== null) {
      console.log(arg3);
    }
  };
}

@Logger
class Persons {
  @Logger2("property")
  private _name = "john";
  constructor() {
    console.log("Creating person object.");
  }

  @Logger2("accessor")
  get name() {
    return this._name;
  }

  set name(@Logger2("parameter") val: string) {
    this._name = val;
  }
}

console.log(new Persons());

// function Decor(data: { hookId: string; template: string }) {
//   return function (_: Function) {
//     console.log(data);
//   };
// }

// function Logger(
//   target: DecorConstructor | typeof DecorConstructor,
//   methodName: string | Symbol,
//   pos: number
// ) {
//   const p = new DecorConstructor();
// }

// @Decor({ hookId: "app", template: "<h1>Hello World</h1>" })
// class DecorConstructor {
//   constructor() {
//     console.log("Decor Constructor is initializing");
//   }
// }

// new DecorConstructor();

interface ValidatorConfig {
  [property: string]: {
    [validateProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(Constructor: any, propertyName: string) {
  const constructorName = Constructor.constructor.name;
  const constructorValidator = registeredValidators[constructorName];
  if (constructorValidator) {
    registeredValidators[constructorName] = {
      ...constructorValidator,
      [propertyName]: [
        "required",
        ...(constructorValidator[propertyName]
          ? constructorValidator[propertyName]
          : []),
      ],
    };
    return;
  }

  registeredValidators[constructorName] = {
    [propertyName]: ["required"],
  };
}

function PositiveNumber(Constructor: any, propertyName: string) {
  const constructorName = Constructor.constructor.name;
  const constructorValidator = registeredValidators[constructorName];
  if (constructorValidator) {
    registeredValidators[constructorName] = {
      ...constructorValidator,
      [propertyName]: [
        "positive",
        ...(constructorValidator[propertyName]
          ? constructorValidator[propertyName]
          : []),
      ],
    };
    return;
  }

  registeredValidators[constructorName] = {
    [propertyName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const course = new Course("javascript", 34);
console.log(validate(course));
