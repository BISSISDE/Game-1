// Start timer

const HeaderStartButton = document.getElementById("buttonStart");
const QuestionPart = document.getElementById("QuestionPart");
const StartPart = document.getElementById("StartPart");

let timer;
let isRunning = false;
let time = 0;

const timeDisplay = document.getElementById("timer");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");
const TimerSpan = document.getElementById("TimerSpan");

HeaderStartButton.addEventListener("click", () => {
  QuestionPart.style.display = "block";
  StartPart.style.display = "none";
  TimerSpan.style.display = "block";

  if (!isRunning) {
    startButton.textContent = "Rest";
    startTimer();
  } else {
    stopTimer();
    startButton.textContent = "Continue";
  }
});
startButton.addEventListener("click", () => {
  if (!isRunning) {
    startButton.textContent = "Rest";
    startTimer();
  } else {
    stopTimer();
    startButton.textContent = "Continue";
  }
});
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  isRunning = true;
  timer = setInterval(() => {
    time++;
    displayTime();
  }, 1000);
}

function stopTimer() {
  isRunning = false;
  clearInterval(timer);
}
function resetTimer() {
  stopTimer();
  time = 0;
  displayTime();
  startButton.textContent = "Start";
}

function displayTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(time) {
  return time < 10 ? `0${time}` : time;
}

//

const questionOneButtons = document.querySelectorAll(".QuestionOneButton");
const colorTrueFalse = document.getElementById("colorTrueFalse");
const firstQuestion = document.querySelector(".FirstQuestion");
const secondQuestion = document.querySelector(".SecondQuestion");
const ThirdQuestion = document.querySelector(".ThirdQuestion");
const End = document.querySelector(".End");

const TextTrueFalse1 = document.getElementById("TextTrueFalse1");
const ResultScore = document.getElementById("ResultScore");

let clicked = false;
let score = 0;

function updateScore() {
  ResultScore.textContent = `Result score: ${score} / 3`;
}

questionOneButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (clicked) return;

    clicked = true;
    if (index === 2) {
      colorTrueFalse.style.color = "green";
      TextTrueFalse1.textContent = "Your response is : True";
      TextTrueFalse1.style.color = "green";
      score++;
    } else {
      colorTrueFalse.style.color = "red";
      TextTrueFalse1.textContent = "Your response is : False";
      TextTrueFalse1.style.color = "red";
    }

    setTimeout(() => {
      firstQuestion.style.display = "none";
      secondQuestion.style.display = "block";
      updateScore();
    }, 1000);
  });
});

const questionTwoButtons = document.querySelectorAll(".QuestionTwoButton");
const colorTrueFalseTwo = document.getElementById("colorTrueFalseTwo");
const TextTrueFalse2 = document.getElementById("TextTrueFalse2");

let clickedTwo = false;

questionTwoButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (clickedTwo) return;

    clickedTwo = true;

    if (index === 3) {
      colorTrueFalseTwo.style.color = "green";
      TextTrueFalse2.textContent = "Your response is : True";
      TextTrueFalse2.style.color = "green";
      score++;
    } else {
      colorTrueFalseTwo.style.color = "red";
      TextTrueFalse2.textContent = "Your response is : False";
      TextTrueFalse2.style.color = "red";
    }

    setTimeout(() => {
      firstQuestion.style.display = "none";
      secondQuestion.style.display = "none";
      ThirdQuestion.style.display = "block";
      updateScore();
    }, 1000);
  });
});

const questionTreeButtons = document.querySelectorAll(".QuestionTreeButton");
const colorTrueFalseTree = document.getElementById("colorTrueFalseTree");
const TextTrueFalse3 = document.getElementById("TextTrueFalse3");

let clickedThree = false;

questionTreeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (clickedThree) return;

    clickedThree = true;

    if (index === 1) {
      colorTrueFalseTree.style.color = "green";
      TextTrueFalse3.textContent = "Your response is : True";
      TextTrueFalse3.style.color = "green";
      score++;
    } else {
      colorTrueFalseTree.style.color = "red";
      TextTrueFalse3.textContent = "Your response is : False";
      TextTrueFalse3.style.color = "red";
    }

    setTimeout(() => {
      firstQuestion.style.display = "none";
      secondQuestion.style.display = "none";
      ThirdQuestion.style.display = "none";
      TimerSpan.style.borderRadius = '20px'
      TimerSpan.style.padding = "90px 15px";
      End.style.display = "block";
      stopTimer();
      updateScore();
    }, 1000);
  });
});
