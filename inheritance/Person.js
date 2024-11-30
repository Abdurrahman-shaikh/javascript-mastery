class Person {
  talk() {
    return "Talking";
  }
}

const me = new Person();
const you = new Person();
console.log(me.talk())
console.log(you.talk())
console.log(Person.prototype)

Person.prototype.talk = function () {
  console.log("This is the improved version of talking")
}

me.talk()

function Animal() {
  this.talk = function () {
    return "Hello"
  }
}

const cat = new Animal();
const dog = new Animal();
dog.age = 2;
console.log(cat.talk());
console.log(cat.age, dog.age)

