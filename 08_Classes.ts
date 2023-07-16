class Person {
  initialName = "John Doe"; // TypeScript will convert the field into property as well
  age: number;

  constructor(public name: string, userAge: number) {
    // name is shorthand initialization property
    this.age = userAge;
  }

  matchThis(this: Person) {} // Function must be invoked by an object that matches the type
}

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

// const accounting = new Department("Accounting");  Abstact classes are just for inheritance. You can't create instance

// accounting.employees !Error!

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

// Static Fields and Members (And important implementation of passing data through classes) Note: this inside static members are mapped to class not instance
class Products {
  prods = ["test 1", "test 2"];

  constructor(onAddToCart: () => void) {}
  addToCart() {}
}

class Cart {
  addItemHandler() {}
}

class Shop {
  cart = new Cart();
  products = new Products(this.cart.addItemHandler);

  static onAddToCart(addToCartHandler: () => void) {
    addToCartHandler();
  }
}

class App {
  static shop: Shop;
  static onAddToCart: () => void;

  static init() {
    this.shop = new Shop();
    this.onAddToCart = this.shop.cart.addItemHandler;
  }
}

// A popular Design Pattern (singleton) can be easly implemented using private constructors and static members and properties

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
