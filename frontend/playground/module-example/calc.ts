export type Point = {
  x: number;
  y: number;
};

type Shape = {
  color: string;
};

const PI = 3.14;

function square(x: number) {
  return x ** 2;
}

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

export { PI, Rectangle, square, type Shape };
