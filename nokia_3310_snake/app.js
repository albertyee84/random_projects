const squares = document.querySelectorAll(".grid div");
const scoreDisplay = document.querySelector("span");
const startBtn = document.querySelector(".start");

const width = 10;
let currentIndex = 0; // first div in our grid
let appleIndex = 0; // first div in our grid
let currentSnake = [2, 1, 0]; // the div in our grid being 2 or the head and 0 being the end or the tail and 1s being the body

let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;

// starting and restarting the game

function startGame() {
  currentSnake.forEach((index) => snakes[index].classList.remove("snake"));
  squares[appleIndex].classList.remove("apple");
  clearInterval(interval);
  score = 0;
  direction = 1;
  scoreDisplay.innerText = score;
  intervalTime = 1000;
  currentSnake = [2, 1, 0];
  currentIndex = 0;
  currentSnake.forEach((index) => snake[index].classList.add("snake"));
  interval = setInterval(moveOutcomes, intervalTime);
}

// function that deals with all the outcomes of the snake
function moveOutcomes() {
    // deals with snake hitting border and snake hitting self
    if (
        (currentSnake[0] + width >= (width * width) && direction === width) // if snake hits bottom
    )
}

function control(e) {
  squares[currentIndex].classList.remove("snake");
  if (e.keyCode === 39) {
    direction = 1; // if we press the right arrow our keyboard, the snake will go right one
  } else if (e.keyCode === 38) {
    direction = -width; // if we press the up arrow, the snake will go back ten divs appearing to go up
  } else if (e.keyCode === 37) {
    direction = -1; // if we press left, the snake will go left one div
  } else if (e.keyCode === 40) {
    direction = +width; // if we press down, the snake head will go forward ten divs appearing to go down
  }
}

document.addEventListener("keyup", control);
