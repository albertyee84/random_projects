const cells = document.querySelectorAll(".cell");
const restartButton = document.querySelector("button");
const oscore = document.querySelector(".oscore");
const xscore = document.querySelector(".xscore");
const currentPlayerDiv = document.querySelector(".currentPlayer");
// if currentPlayer is true then marker = 'O' else 'X'
let currentPlayer = true;
let xScoreTally = 0;
let oScoreTally = 0;

let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick() {
  if (this.innerHTML === "") {
    placeToken(this);
    if (checkWin()) {
      endGame("win");
    } else if (checkDraw()) {
      endGame("draw");
    } else {
      switchPlayer();
      displayCurrentPlayer();
    }
  }
}

function switchPlayer() {
  currentPlayer = !currentPlayer;
}

function displayCurrentPlayer() {
  if (currentPlayer) {
    currentPlayerDiv.innerHTML = "O";
  } else {
    currentPlayerDiv.innerHTML = "X";
  }
}

function placeToken(cell) {
  if (currentPlayer) {
    cell.innerHTML = "O";
  } else {
    cell.innerHTML = "X";
  }
}

function checkWin() {
  for (let i = 0; i < winConditions.length; i++) {
    let [x, y, z] = winConditions[i];
    if (cells[x].innerHTML !== "") {
      if (
        cells[x].innerHTML === cells[y].innerHTML &&
        cells[y].innerHTML === cells[z].innerHTML
      ) {
        paintBoard(x, y, z);
        return true;
      }
    }
  }
  return false;
}

function checkDraw() {
  return [...cells].every((cell) => cell.innerHTML !== "");
}

function endGame(type) {
  if (type === "win") {
    alert("Winner!");
  } else {
    alert("Draw");
  }
  cells.forEach((cell) => cell.removeEventListener("click", handleClick));
  currentPlayer ? oScoreTally++ : xScoreTally++;
  updateScore();
  currentPlayer = true;
}

function startBoard() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.addEventListener("click", handleClick);
    cell.classList.remove("winner");
    cell.classList.remove("notwinner");
  });
  displayCurrentPlayer();
}

function updateScore() {
  oscore.innerHTML = oScoreTally;
  xscore.innerHTML = xScoreTally;
}

function paintBoard(x, y, z) {
  for (let i = 0; i < cells.length; i++) {
    if (i === x || i === y || i === z) {
      cells[i].classList.add("winner");
    } else {
      cells[i].classList.add("notwinner");
    }
  }
}

startBoard();
restartButton.addEventListener("click", startBoard);
