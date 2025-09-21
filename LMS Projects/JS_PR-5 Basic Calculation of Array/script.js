function getNumbers() {
    let input = document.getElementById("arrayInput").value;
    let parts = input.split(",");
    let numbers = [];

    for (let i = 0; i < parts.length; i++) {
        let n = parseFloat(parts[i]);
        if (!isNaN(n)) {
            numbers.push(n);
        }
    }

    return numbers;
}

function findSum() {
    let arr = getNumbers();
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    document.getElementById("result").innerText = "Sum = " + sum;
}

function findAverage() {
    let arr = getNumbers();
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    let avg = arr.length > 0 ? sum / arr.length : 0;
    document.getElementById("result").innerText = "Average = " + avg;
}

function findMax() {
    let arr = getNumbers();
    if (arr.length === 0) {
        document.getElementById("result").innerText = "No numbers entered!";
        return;
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    document.getElementById("result").innerText = "Max = " + max;
}

function findMin() {
    let arr = getNumbers();
    if (arr.length === 0) {
        document.getElementById("result").innerText = "No numbers entered!";
        return;
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    document.getElementById("result").innerText = "Min = " + min;
}
