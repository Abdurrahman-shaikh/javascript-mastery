function myFun(name) {
  console.log("This is a function");
  console.log(`this function is called by ${name}`)
}

myFun("shifa");

function getRole(role, name) {

  switch (role) {
    case 'admin':
      return `${name} is admin with all the access`;

    case 'guest':
      return `${name} is a guest user`;
    default:
      return `${name} is the guest user`
      break;
  }
}

str = getRole('admin', 'shifa');
console.log(str)
let fun = () => {
  console.log('arrow function');
}

fun();

var newFun = (fun) => {
  fun;
}
