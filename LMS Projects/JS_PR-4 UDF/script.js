// 1. Simple Addition Function

// Normal Function
function addNumbers(a, b) {
    return a + b;
}
// Arrow Function
const addNumbersArrow = (a, b) => a + b;

// 2. Check Even or Odd

// Normal Function
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
// Arrow Function
const checkEvenOddArrow = num => num % 2 === 0 ? "Even" : "Odd";

// 3. Square of a Number

// Normal Function
function squareNumber(num) {
    return num * num;
}
// Arrow Function
const squareNumberArrow = num => num * num;

// 4. String Capitalizer

// Normal Function
function capitalizeString(str) {
    if (str.length === 0) return "";
    return str[0].toUpperCase() + str.slice(1);
}
// Arrow Function
const capitalizeStringArrow = str => str.length === 0 ? "" : str[0].toUpperCase() + str.slice(1);

// Outputs

console.log("Addition:", addNumbers(5, 3), addNumbersArrow(5, 3));
console.log("Even/Odd:", checkEvenOdd(4), checkEvenOddArrow(7));
console.log("Square:", squareNumber(6), squareNumberArrow(6));
console.log("Capitalized:", capitalizeString("hello"), capitalizeStringArrow("world"));
