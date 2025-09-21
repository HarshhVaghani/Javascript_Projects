function log(message) {
  document.getElementById("output").innerHTML += message + "<br>";
}

function clearOutput() {
  document.getElementById("output").innerHTML = "";
}

// 1. FOR LOOP → Prime numbers
function runPrimes() {
  clearOutput();
  let N = parseInt(document.getElementById("numberInput").value);
  if (isNaN(N) || N < 2) {
    log("⚠️ Please enter a number greater than 1.");
    return;
  }

  log("Prime numbers between 1 and " + N + ":");
  for (let num = 2; num <= N; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      log(num);
    }
  }
}

// 2. WHILE LOOP → Sum of digits
function runDigitSum() {
  clearOutput();
  let N = parseInt(document.getElementById("numberInput").value);

  if (isNaN(N) || N < 0) {
    log("⚠️ Please enter a valid positive number.");
    return;
  }

  let sum = 0;
  let num = N;

  if (num === 0) {
    sum = 0;
  } else {
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  }

  log("Sum of digits of " + N + " = " + sum);
}


// 3. DO-WHILE LOOP → Guessing game (UI version)
let secretNumber = 25;
let attempts = 0;

function startGuessingGame() {
  clearOutput();
  document.getElementById("guessContainer").style.display = "block";
  attempts = 0;
  secretNumber = Math.floor(Math.random() * 50) + 1;
  log("🎲 Guess the secret number between 1 and 50.");
}

function makeGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(guess)) {
    log("⚠️ Please enter a valid number.");
    return;
  }

  attempts++;

  if (guess < secretNumber) {
    log("Too low! Try again.");
  } else if (guess > secretNumber) {
    log("Too high! Try again.");
  } else {
    log("🎉 Correct! You guessed in " + attempts + " attempts.");
    document.getElementById("guessContainer").style.display = "none";
  }

  document.getElementById("guessInput").value = "";
}
