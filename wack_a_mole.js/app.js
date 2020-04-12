const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  // assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id;
}

squares.forEach((square) => {
  square.addEventListener("mouseup", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      randomSquare();
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
    alert("GAME OVER! Your finale score is " + result);
  }
}

let timerId = setInterval(countDown, 1000);
moveMole();
