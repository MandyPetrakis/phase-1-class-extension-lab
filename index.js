class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    let sideCount = this.sides.length;
    return sideCount;
  }
  get perimeter() {
    return this.sides.reduce((acc, val) => {
      return acc + val;
    }, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (
      this.sides[0] + this.sides[1] < this.sides[2] ||
      this.sides[0] + this.sides[2] < this.sides[1] ||
      this.sides[1] + this.sides[2] < this.sides[0]
    ) {
      return false;
    } else return true;
  }
}

class Square extends Polygon {
  get isValid() {
    if (
      this.sides[0] === this.sides[1] &&
      this.sides[0] === this.sides[2] &&
      this.sides[0] === this.sides[3]
    ) {
      return true;
    } else return false;
  }
  get area() {
    return this.sides[0] * this.sides[1];
  }
}
