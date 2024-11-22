function sum(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += num;
  }
  console.log(sum);

  return sum;
}

function findSum() {
  return sum(1000);
}

setTimeout(findSum, 1000);
console.log("Hello world");

setTimeout(() => {
  console.log("this appears first in the code");
}, 2000);

setTimeout(() => {
  console.log("this appears last in the code");
}, 1000);
