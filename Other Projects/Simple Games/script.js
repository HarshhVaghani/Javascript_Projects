let rollBtn = document.getElementById("rollBtn");
let endBtn = document.getElementById("endBtn");
let roundResult = document.getElementById("roundResult");
let finalResult = document.getElementById("finalResult");
let playerScoreEl = document.getElementById("playerScore");
let computerScoreEl = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

const playerDiceImages = document.querySelectorAll("#player-dice-container .dice");
const computerDiceImages = document.querySelectorAll("#computer-dice-container .dice");

function highlightDice(diceImages, value) {
  diceImages.forEach(img => {
    if (parseInt(img.dataset.value) === value) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

rollBtn.addEventListener("click", function () {
  if (gameEnded) return;

  const playerRoll = Math.floor(Math.random() * 6) + 1;
  const computerRoll = Math.floor(Math.random() * 6) + 1;

  highlightDice(playerDiceImages, playerRoll);
  highlightDice(computerDiceImages, computerRoll);

  if (playerRoll > computerRoll) {
    roundResult.innerText = "🎉 You Win this round!";
    playerScore++;
  } else if (playerRoll < computerRoll) {
    roundResult.innerText = "💻 Computer Wins this round!";
    computerScore++;
  } else {
    roundResult.innerText = "🤝 It's a Draw!";
  }

  playerScoreEl.innerText = `Score: ${playerScore}`;
  computerScoreEl.innerText = `Score: ${computerScore}`;
});

endBtn.addEventListener("click", function () {
  gameEnded = true;
  rollBtn.disabled = true;

  if (playerScore > computerScore) {
    finalResult.innerText = `🏆 Final Result: You Win! (${playerScore} - ${computerScore})`;
  } else if (playerScore < computerScore) {
    finalResult.innerText = `💻 Final Result: Computer Wins! (${computerScore} - ${playerScore})`;
  } else {
    finalResult.innerText = `🤝 Final Result: It's a Draw! (${playerScore} - ${computerScore})`;
  }
});
