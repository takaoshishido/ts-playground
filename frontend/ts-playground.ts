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

console.log(calc(1, 2));
