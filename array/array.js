var isEven = function (num) {
  return num % 2 === 0;
}

console.log([10, 2, 30, 4, 50, 6].every((e) => {
  e % 2 === 0;
}));

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = testArray.filter((num) => (num != 5));

console.log(res);

// testArray.fill(null, 3);
// console.log(testArray);

console.log(testArray.slice(4, 1));

console.log(testArray.splice(3, 1));

console.log(testArray.filter((num) => (num >= 5)));

let n;

console.log(typeof n);
