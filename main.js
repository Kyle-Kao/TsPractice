"use strict";
let input1 = document.querySelector('#num1');
let input2 = document.querySelector('#num2');
let sum = document.querySelector('#sum');
let add = (num1, num2) => {
    return num1 + num2;
};
sum.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value));
});
