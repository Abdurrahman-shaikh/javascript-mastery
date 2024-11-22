function init() {
  var firstName = "shifa";
  console.log("Hello");
  function sayFirstName() {
    console.log(firstName);
  }
  return sayFirstName;
}

var val = init();
val();

function doAddition(x) {
  return function (y) {
    return x + y;
  }
}

var add = doAddition(4);
console.log(add(5));
