const quizForm = document.getElementById("quiz-form");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer-display");
const totalTimeDisplay = document.getElementById("total-time");
const message = document.getElementById("message");
const submitButton = document.getElementById("submit-btn");

let score = 0;
let time = 0;
let timerId;

// function to calculate the total score and time
function calculateScore() {
  // calculate the total score based on the selected answers
  const totalScore = 5;

  // stop the timer
  clearInterval(timerId);

  // update the score and timer displays
  scoreDisplay.textContent = totalScore;
  timerDisplay.style.display = "none";
  totalTimeDisplay.style.display = "block";
  totalTimeDisplay.children[0].textContent = formatTime(time);
}

// function to format the time display
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// event listener for the submit button
quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // calculate the total score and time
  calculateScore();
});

// timer function to update the time display
function updateTimer() {
  time++;
  timerDisplay.textContent = `Time: ${formatTime(time)}`;
}

// start the timer when the page is loaded
timerId = setInterval(updateTimer, 1000);

const correctAnswers = ["c", "c", "c", "c", "c"];
const form = document.querySelector("#quiz-form");
const result = document.querySelector(".quiz-score");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  // show the result
  message.style.display = "none";
  scrollTo(0, 0);
  document.body.style.backgroundImage = 'url("./img/cc.gif")';
  document.body.style.backgroundSize = "cover";
  submitButton.style.display = "none";

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("#score").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
      const reloadBtn = document.createElement("button");
      reloadBtn.textContent = "Try Again";
      // reloadBtn.style.display = "block";
      reloadBtn.addEventListener("click", () => location.reload());
      result.appendChild(reloadBtn);
    } else {
      output++;
    }
  }, 10);
});
