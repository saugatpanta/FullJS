const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();
//localStorage.removerItem

let isAutoPlaying = false;
let interId;

// const autoPlay = () => {};

function autoPlay() {
  if (!isAutoPlaying) {
    interId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(interId);
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rock-btn").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".js-paper-btn").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".js-scissors-btn").addEventListener("click", () => {
  playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  } else if (playerMove === "reset") {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
  }

  localStorage.setItem("score", JSON.stringify(score));
  const resultParagraph = document.body.querySelector(".js-result");
  const moveParagraph = document.body.querySelector(".js-moves");

  if (playerMove === "reset") {
    resultParagraph.innerHTML = `The Score has been reset.`;
    moveParagraph.innerHTML = "";
  } else {
    resultParagraph.innerHTML = result;
    moveParagraph.innerHTML = `You
      <img class="moves-icon" src="emoji/${playerMove}-emoji.png" alt="" />
      <img class="moves-icon" src="emoji/${computerMove}-emoji.png" alt="" />
      computer`;
  }

  updateScoreElement();
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function updateScoreElement() {
  const scoreJs = document.querySelector(".score-js");
  scoreJs.innerHTML = `Wins = ${score.wins} Losses = ${score.losses} Ties = ${score.ties}`;
}
