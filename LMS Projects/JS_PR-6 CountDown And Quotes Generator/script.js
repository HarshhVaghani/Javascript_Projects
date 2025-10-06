let timer = null;
let timeRemaining = 0;
let isPaused = false;
let initialTime = 0;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');
const message = document.getElementById('message');
const timeInput = document.getElementById('timeInput');

function updateButtonStates(running, paused) {
  startBtn.disabled = running && !paused;
  pauseBtn.disabled = !running;
  resetBtn.disabled = !running && timeRemaining === 0;
  timeInput.disabled = running;
}

function startTimer() {
  // Prevent multiple intervals
  if (timer && !isPaused) return;

  // Resume from pause
  if (isPaused) {
    isPaused = false;
    pauseBtn.textContent = '⏸ Pause';
    message.textContent = '';
  } else {
    // Fresh start
    const inputTime = parseInt(timeInput.value);
    if (isNaN(inputTime) || inputTime <= 0) {
      message.textContent = 'Please enter a valid time!';
      message.className = 'text-xl font-semibold text-center text-red-600 min-h-7';
      return;
    }

    // Always clear any previous timer before starting new one
    clearInterval(timer);
    timer = null;

    timeRemaining = inputTime;
    initialTime = inputTime;
    display.textContent = timeRemaining;
    message.textContent = '';
  }

  updateButtonStates(true, false);

  // Start countdown
  timer = setInterval(() => {
    if (!isPaused) {
      timeRemaining--;
      display.textContent = timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        timer = null;
        timeRemaining = 0;
        display.textContent = '0';
        message.textContent = "Time's up! ⏰";
        message.className = 'text-xl font-semibold text-center text-emerald-600 min-h-7';
        updateButtonStates(false, false);
        timeInput.disabled = false;
      }
    }
  }, 1000);
}

function pauseTimer() {
  if (!isPaused) {
    isPaused = true;
    pauseBtn.textContent = '▶ Resume';
    message.textContent = 'Paused...';
    message.className = 'text-lg text-center text-yellow-600 font-medium';
  } else {
    startTimer(); // Resume
  }
  updateButtonStates(true, isPaused);
}

function resetTimer() {
  // 🔹 Ensure timer fully stops before reset
  clearInterval(timer);
  timer = null;

  timeRemaining = 0;
  isPaused = false;
  display.textContent = '0';
  message.textContent = '';
  pauseBtn.textContent = '⏸ Pause';
  updateButtonStates(false, false);
  timeInput.disabled = false;
}

// Quote Generator
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher" },
  { text: "You don't have to be extreme, just consistent.", author: "Unknown" },
  { text: "Do not wait for the perfect moment. Take the moment and make it perfect.", author: "Zoey Sayward" },
  { text: "If you get tired, learn to rest, not to quit.", author: "Banksy" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" }
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  document.getElementById('quoteText').textContent = '"' + quote.text + '"';
  document.getElementById('authorText').textContent = '- ' + quote.author;
}

document.addEventListener('DOMContentLoaded', () => {
  display.textContent = '0';
});
