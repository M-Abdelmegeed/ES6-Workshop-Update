//Example 1

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  getName() {
    return this.name;
  }

  makeSound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  getBreed() {
    return this.breed;
  }

  makeSound() {
    console.log("Bark");
  }
}

const myDog = new Dog("Fido", 3, "Golden Retriever");
console.log(myDog.getName()); // Output: Fido
console.log(myDog.getAge()); // Output: 3
console.log(myDog.getBreed()); // Output: Golden Retriever
myDog.makeSound(); // Output: Bark

// Example 2 Use of Setters and Getters

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = value / this.height;
  }
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area); // Output: 50
rectangle.area = 100;
console.log(rectangle.width); // Output: 20
console.log(rectangle.height); // Output: 5
