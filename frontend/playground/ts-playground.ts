/* eslint-disable @typescript-eslint/no-unused-vars */
interface FruitStock {
  [key: string]: number;
  peach: number;
}
const fruitStock: FruitStock = {
  peach: 0,
};
fruitStock.apple = 10;
fruitStock.banana = 20;

interface Product {
  [key: `product_${number}`]: string;
}

const product: Product = {
  product_1: "apple",
  product_2: "banana",
};
product.product_3 = "cherry";

interface CalcInterface {
  (a: number, b: number): number;
}

const calc: CalcInterface = (a, b) => {
  return a + b;
};

// console.log(calc(1, 2));

// オーバーライド
interface Vehicle {
  speed: number;
  model: string | undefined | number;
}

interface Car extends Vehicle {
  brand: string;
  /**
   * modelをオーバーライド
   * Vehicleのmodelとの互換性を保たないといけない（string | undefined | number）
   */
  model: number;
}

const car: Car = {
  speed: 100,
  brand: "Toyota",
  model: 2025,
};

// console.log(car);

// interfaceのマージ
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const animal: Animal = {
  name: "dog",
  age: 10,
};

// console.log(animal);

/**
 * これはageがないのでエラー
 *
 * interface Animal {
 *   name: string;
 * }
 *
 * interface Animal {
 *   age: 10;
 * }
 *
 * const animal: Animal = {
 *   name: "dog",
 */

/**
 * p.71 クラス
 */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person("John", 30);
person.sayHello();
// person.gender = "male";

// p.78 クラス　互換性のないメソッドのオーバーライド
class SuperClass {
  method(value: number): string {
    return `SuperClass: ${value}`;
  }
}

// class SubClass extends SuperClass {
//   method(value: string): string {
//     return `SubClass: ${value}`;
//   }
// }

// p.79 クラス　constructorのオーバーライド
class Parent {
  public name: string;

  constructor(name: string) {
    this.name = name;

    // 初期化時に発火する
    console.log(`Parent constructor: ${name}`);
  }
}

class Child extends Parent {
  constructor(name: string, age: number) {
    super(name);
    console.log(`Child constructor: ${name} ${age}`);
  }
}

const child = new Child("John", 10);

console.log(child.name);

class User {
  constructor(
    public name: string, // これはプロパティとして自動的に定義される
    private password: string
  ) {}
  getPassword(password: string) {
    console.log(password);
  }
}

const user = new User("John", "password");
console.log(user.name);
// console.log(user.password);
user.getPassword("password");
