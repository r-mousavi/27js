let x = Number(prompt("enter x value"));
let y = Number(prompt("enter y value"));
let z = Number(prompt("enter z value"));


let array = [x, y, z];

let a = array.sort(function (a, b) { return a - b });
a.shift()
a.pop()
console.log(a)