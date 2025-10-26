interface FruitStock {
  [key: string]: number;
  peach: number;
}
const fruitStock: FruitStock = {
  peach: 0,
};
fruitStock.apple = 10;
fruitStock.banana = 20;

console.log(fruitStock);
