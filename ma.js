let input = "123"; // input from html maybe
let arr = input.split("");
let sum = arr.reduce((p, c) => p+c, 0);
console.log(sum);