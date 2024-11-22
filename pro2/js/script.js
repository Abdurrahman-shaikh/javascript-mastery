let red = document.querySelector(".red");
let cyan = document.querySelector(".cyan");
let violet = document.querySelector(".violet");
let orange = document.querySelector(".orange");
let pink = document.querySelector(".pink");

let center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBgColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor
}

var orangeElement = getBgColor(orange);

orange.addEventListener('mouseenter', () => {
  center.style.background = orangeElement;
})
