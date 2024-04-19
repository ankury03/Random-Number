let random = parseInt(Math.random() * 100 + 1);

const input = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesses = document.querySelector(".guesses");
const attempts = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const result = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevguess = [];
let numguess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    alert("Enter a number greater than 1");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayMssg(guess);
      displayMssg(`Game over. The random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === random) {
    displayMssg(`You guessed it right:)`);
    endGame();
  } else if (guess < random) {
    displayMssg("Think bigger number!");
  } else if (guess > random) {
    displayMssg("Think smaller number");
  }
};

const displayGuess = (guess) => {
  input.value = "";
  guesses.innerHTML += `${guess} ,`;
  numguess++;
  attempts.innerHTML = `${11 - numguess}`;
};

const displayMssg = (message) => {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  p.style.cursor = "pointer";
  result.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guesses.innerHTML = "";
    attempts.innerHTML = `${11 - numguess} `;
    input.removeAttribute("disabled");
    result.removeChild(p);

    playGame = true;
  });
};
