var user = {
  firstName: "Shifa",
  lastName: "Armaan",
  role: "admin",
  loginCount: 7,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  countCourse: function () {
    return `Currently ${this.firstName} is enrolled in ${this.courseList.length} courses`;
  }
}

console.table(user);
console.log(user.countCourse());
user.buyCourse('react');
console.log(user.countCourse());
