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
