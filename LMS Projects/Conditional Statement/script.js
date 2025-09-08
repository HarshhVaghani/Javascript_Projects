{
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    let num3 = parseInt(prompt("Enter third number:"));

    let max;
    if (num1 >= num2 && num1 >= num3) {
        max = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        max = num2;
    } else {
        max = num3;
    }

    let min;
    if (num1 <= num2 && num1 <= num3) {
        min = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        min = num2;
    } else {
        min = num3;
    }

    console.log("Maximum number: " + max);
    console.log("Minimum number: " + min);

    if (max % 2 === 0) {
        console.log("Maximum is even");
    } else {
        console.log("Maximum is odd");
    }

    if (min < 10) {
        console.log("Minimum is Very small");
    } else if (min >= 10 && min <= 50) {
        console.log("Minimum is Small");
    } else if (min >= 51 && min <= 100) {
        console.log("Minimum is Medium");
    } else {
        console.log("Minimum is Large");
    }

}