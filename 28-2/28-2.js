let num = Number(prompt("enter a number"));
console.log(num);
console.log(typeof num);
console.log(num % 2);

if (typeof num == "number") {
    if (num % 2 == 0) {
        console.log("The number is even");
    } else if (num % 2 == 1) {
        console.log("The number is odd");
    } else {
        console.log("it is not correct");
    }
}

