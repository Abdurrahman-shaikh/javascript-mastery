class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  speak() {
    console.log(`hii there ${this.speaks}`)
  }
}

let dog = new Animal("dog", 4, "bhaw bhaw");

console.log(dog.name, dog.legCount, dog.speak())
