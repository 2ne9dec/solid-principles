// Interface Segregation Principle - Программные сущности не должны зависеть от методов, которые они не используют. Принцип разделения интерфейсов говорит о том, что слишком «толстые» интерфейсы необходимо разделять на более маленькие и специфические, чтобы программные сущности маленьких интерфейсов знали только о методах, которые необходимы им в работе. В итоге, при изменении метода интерфейса не должны меняться программные сущности, которые этот метод не используют.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`);
  },
};

const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`);
  },
};

const flier = {
  fly() {
    console.log(`${this.name} умеет летать`);
  },
};

class Dog extends Animal {}

class Eagle extends Animal {}

class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog("собака");

dog.walk();
dog.swim();

const eagle = new Eagle("орел");

eagle.walk();
eagle.fly();

const whale = new Whale("кит");

whale.swim();