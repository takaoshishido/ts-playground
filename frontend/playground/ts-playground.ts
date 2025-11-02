/* eslint-disable @typescript-eslint/no-unused-vars */
interface FruitStock {
  [key: string]: number;
  peach: number;
  // ↓これはインデックスシグニチャと型の整合性がないのでエラー（numberだけしか許可しない）
  // price: string;
}
const fruitStock: FruitStock = {
  peach: 0,
  // price: "100", // これはエラー
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
  age: number | undefined;

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

// これはエラー（型の互換性がないから）
// let john = "john";
// john = new Person("John", 30);

let john = new Person("John", 30);
john = {
  name: "John",
  age: 30,
  sayHello: () => {
    // console.log("Hello")
  },
  // ↓これはエラー
  // gender: "male",
};

// p76 クラスの継承
class GrandParent1 {
  getName(): string {
    return "GrandParent";
  }
}

class Parent1 extends GrandParent1 {
  getName(): string {
    return "Parent";
  }
}

class Child1 extends Parent1 {
  getName(): string {
    return "Child";
  }
}

const child1 = new Child1();
// console.log(child1.getName());

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
    // console.log(`Parent constructor: ${name}`);
  }
}

class Child extends Parent {
  constructor(name: string, age: number) {
    super(name);
    // console.log(`Child constructor: ${name} ${age}`);
  }
}

const child = new Child("John", 10);

// console.log(child.name);

class User {
  constructor(
    public name: string, // これはプロパティとして自動的に定義される
    private password: string
  ) {}
  getPassword(password: string) {
    // console.log(password);
  }
}

const user = new User("John", "password");
// console.log(user.name);
// console.log(user.password);
user.getPassword("password");

// adultAgeは18のリテラル型
const adultAge = 18;

let age: number;
// eslint-disable-next-line prefer-const
age = adultAge;

// console.log(age);

const a = "a";
const b = "b";

// abの定義前でも、type of ab(型エイリアス) は参照できる
const test: typeof ab = "a";
// ↓これはコンパイルエラー
// console.log("ab", ab)

const ab: typeof a | typeof b = "b";

/** p36
 * 過剰プロパティチェックをすり抜けるパターン
 * */
// あらかじめオブジェクトリテラルでオブジェクトを作成して変数に代入
const person2 = {
  name: "alice",
  age: 30,
  gender: "male",
};
type Person2 = {
  name: string;
  age: number;
};
const aliceAsPerson: Person2 = person2; // 過剰プロパティチェックはならない

// p37 ?とundefined型の違い
// | undefinedは必須、?はプロパティごと省略可能
type Person3 = {
  name?: string;
  gender: string | undefined;
  age: 30;
};

const bob: Person3 = {
  age: 30,
  gender: undefined,
};

const nums = [1, 2, 3];
// 追加できない
// nums.push('test');

// [number, string]　のTuple型
const alice: [string, number] = ["alice", 1];
// console.log(alice[0].toUpperCase());
// console.log(alice[1].toString());

interface RGB {
  RGB: [red: number, green: number, blue: number];
  log: () => void;
}
const rgb: RGB = {
  RGB: [1, 2, 3],
  log: () => {
    // console.log("2")
  },
};

// anyとunknown
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anyThing: any = 1234;
let someStr = "hoge";
someStr = anyThing;
// console.log(someStr);

const unknownThing: unknown = 2222;
const unStr = "unknown";
// ↓これはエラーになる
// unStr = unknownThing;

// undefined と null
const nullCheck = {
  age: 25,
  firstName: Math.random() > 0.5 ? "Alice" : null,
};
// console.log(nullCheck.firstName?.toUpperCase);

// 関数
function addNum(a: unknown, b: unknown) {
  return typeof a === "number" && typeof b === "number" && a + b;
}

function returnVoid(a: number): void {
  // console.log(a);
}

function returnUndefined(b: number): undefined {
  // console.log(b);
}
returnVoid(333);
returnUndefined(444);

// never型を使う場合
// function throwError(m: string): never {
//   throw new Error(m);
// }

// throwError("err");

// p.67 オーバーライド
interface Vehicle2 {
  speed: number;
  model: string | undefined | number;
}
const vehicle: Vehicle2 = {
  speed: 100,
  // ここまではstring | undefined の型を許可している
  model: undefined,
};

interface Car2 extends Vehicle2 {
  brand: string;
  /**
   * modelをオーバーライド
   * Vehicleのmodelとの互換性を保たないといけない（string | undefined | number）
   */
  model: number;
}

const car2: Car2 = {
  speed: 100,
  brand: "Toyota",
  // ここはnumberの型しか許可しない
  // model: "lexus",
  model: 2025,
};

interface User2 {
  nameAge: [string, number];
  email: string;
}

const user2: User2 = {
  nameAge: ["John", 30],
  email: "john@example.com",
};
// タプル型は明示的に肩を定義しないとArray型として扱われる
// 乗り切る方法はこれ
const user3 = {
  nameAge: ["John", 40] as [string, number],
  email: "john@example.com",
  age: 30,
};
// user4は過剰プロパティチェックをすり抜ける
const user4: User2 = user3;

// console.log(user4);
// console.log(user2.nameAge[0].toUpperCase());
// console.log(user2.nameAge[1].toString());

//  シャローコピーとディープコピーの違い
// シャローコピー
const sampleObj = {
  name: "John",
  age: 30,
  profile: {
    address: {
      city: "Tokyo",
      country: "Japan",
      postCode: "100-0001",
    },
  },
};
const shallowCopy = { ...sampleObj };
shallowCopy.name = "Jane";
shallowCopy.profile.address.city = "Osaka";
// console.log(sampleObj);
// console.log(shallowCopy);
// 出力結果
// {
//   name: 'John',
//   age: 30,
//   profile: {
//     address: { city: 'Osaka', country: 'Japan', postCode: '100-0001' }
//   }
// }
// {
//   name: 'Jane',
//   age: 30,
//   profile: {
//     address: { city: 'Osaka', country: 'Japan', postCode: '100-0001' }
//   }
// }

// ディープコピー
const sampleObj2 = {
  name: "Tom",
  age: 30,
  profile: {
    address: {
      city: "New York",
      country: "USA",
      postCode: "156-0002",
    },
  },
};
// structuredCloneはAPIレスポンスや状態管理のデータをコピーする際に最適
const deepCopy = structuredClone(sampleObj2);
deepCopy.name = "Jane";
deepCopy.profile.address.city = "Osaka";
deepCopy.profile.address.country = "Japan";
deepCopy.profile.address.postCode = "100-0001";
// console.log(sampleObj2);
// console.log(deepCopy);
// 出力結果
// {
//   name: 'Tom',
//   age: 30,
//   profile: {
//     address: { city: 'New York', country: 'USA', postCode: '156-0002' }
//   }
// }
// {
//   name: 'Jane',
//   age: 30,
//   profile: {
//     address: { city: 'Osaka', country: 'Japan', postCode: '100-0001' }
//   }
// }
