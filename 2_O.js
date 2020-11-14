// Open Close Principle - программные сущности (классы, модули, функции и т. п.) должны быть открыты для расширения, но закрыты для изменения. Т.е. когда мы добавляем что-то новое, старый код не меняется.

class Shape {
  area() {
    throw new Error("Area method should be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return this.radius ** 2 * Math.PI;
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  area() {
    return (this.a * this.b) / 2;
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const calc = new AreaCalculator([
  new Circle(3),
  new Circle(5),
  new Square(2),
  new Rect(3, 2),
  new Triangle(2, 5),
]);

console.log(calc.sum());
