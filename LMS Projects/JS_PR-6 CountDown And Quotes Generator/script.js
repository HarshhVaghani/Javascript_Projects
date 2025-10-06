{
  // Timer variables
let timer;
let timeRemaining = 0;
let isPaused = false;
let initialTime = 0;

// Button elements
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const display = document.getElementById('display');
const message = document.getElementById('message');
const timeInput = document.getElementById('timeInput');

function updateButtonStates(running, paused) {
  startBtn.disabled = running && !paused;
  pauseBtn.disabled = !running || paused;
  stopBtn.disabled = !running;
  timeInput.disabled = running;
}

function startTimer() {
  if (isPaused) {
    // Resume from pause
    isPaused = false;
    pauseBtn.textContent = '⏸ Pause';
    updateButtonStates(true, false);
  } else {
    // Start new timer
    const inputTime = parseInt(timeInput.value);
    if (isNaN(inputTime) || inputTime <= 0) {
      message.textContent = 'Please enter a valid time!';
      message.className = 'text-xl font-semibold text-center text-red-600 min-h-7';
      return;
    }
    
    timeRemaining = inputTime;
    initialTime = inputTime;
    message.textContent = '';
    updateButtonStates(true, false);
  }

  timer = setInterval(() => {
    if (!isPaused) {
      display.textContent = timeRemaining;
      
      if (timeRemaining === 0) {
        clearInterval(timer);
        message.textContent = "Time's up! ⏰";
        message.className = 'text-xl font-semibold text-center text-emerald-600 min-h-7';
        updateButtonStates(false, false);
        timeInput.disabled = false;
      } else {
        timeRemaining--;
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = !isPaused;
  
  if (isPaused) {
    pauseBtn.innerHTML = '<span class="inline-block mr-1">▶</span> Resume';
    message.textContent = 'Timer paused';
    message.className = 'text-xl font-semibold text-center text-yellow-600 min-h-7';
    updateButtonStates(true, true);
  } else {
    pauseBtn.innerHTML = '<span class="inline-block mr-1">⏸</span> Pause';
    message.textContent = '';
    updateButtonStates(true, false);
  }
}

function stopTimer() {
  clearInterval(timer);
  timeRemaining = 0;
  isPaused = false;
  display.textContent = '0';
  message.textContent = 'Timer stopped';
  message.className = 'text-xl font-semibold text-center text-slate-600 min-h-7';
  pauseBtn.innerHTML = '<span class="inline-block mr-1">⏸</span> Pause';
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
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" }
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  document.getElementById('quoteText').textContent = quote.text;
  document.getElementById('authorText').textContent = quote.author;
}

// Initialize display on page load
document.addEventListener('DOMContentLoaded', () => {
  display.textContent = '0';
});
}


{
  let timer;

  // Function to start countdown
  function startTimer() {
    let timeLeft = document.getElementById("timeInput").value;
    document.getElementById("message").textContent = "";
    document.getElementById("display").textContent = timeLeft;
    clearInterval(timer);

    timer = setInterval(function () {
      timeLeft = timeLeft - 1;

      document.getElementById("display").textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);

        document.getElementById("message").textContent = "Time Up! 🎉";
      }
    }, 1000);
  }
}

{
  // Array of quotes - each quote has text and author
  const quotes = [
    {
      text: "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.",
      author: "Mary Anne Radmacher",
    },
    {
      text: "You don’t have to be extreme, just consistent.",
      author: "Unknown (popular in minimalist productivity circles)",
    },
    {
      text: "Do not wait for the perfect moment. Take the moment and make it perfect.",
      author: "Zoey Sayward",
    },
    {
      text: "If you get tired, learn to rest, not to quit.",
      author: "Banksy",
    },
    {
      text: "Success is the sum of small efforts, repeated day in and day out",
      author: "Robert Collier",
    },
    {
      text: "Don’t be afraid to give up the good to go for the great",
      author: "John D. Rockefeller",
    },
    {
      text: "A river cuts through rock not because of its power, but because of its persistence.",
      author: "Jim Watkins",
    },
    {
      text: "Discipline is choosing between what you want now and what you want most.",
      author: "Abraham Lincoln",
    },
    {
      text: "Your future is created by what you do today, not tomorrow",
      author: "Robert T. Kiyosaki",
    },
    {
      text: "The secret of change is to focus all your energy not on fighting the old, but on building the new.",
      author: "Socrates",
    },
  ];

  // Function to show a random quote
  function showQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomNumber];

    document.getElementById("quoteText").textContent =
      '“' + randomQuote.text + '”';

    document.getElementById("authorText").textContent =
      "- " + randomQuote.author;
  }
}
