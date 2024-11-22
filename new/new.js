var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is ${courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`the first name is ${this.firstName}`)
}

var hitesh = new User("hitesh", 2);
hitesh.getCourseCount();

hitesh.getFirstName();

console.log(hitesh);
