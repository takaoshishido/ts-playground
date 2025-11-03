/* eslint-disable @typescript-eslint/no-unused-vars */
import { Point, Rectangle, Shape } from "./calc";

const r = new Rectangle(10, 20);
// console.log(r.area);
// console.log(square(5));
// console.log(PI);

const shape: Shape = {
  color: "red",
};
// console.log(shape.color);
const point: Point = { x: 10, y: 20 };
// console.log(point.x, point.y);

// グローバル変数のpiはscriptB.tsで定義されたものが使われる
// ただしエラーになる。ReferenceError: pi is not defined
// console.log("main", pi);
