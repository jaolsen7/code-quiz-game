var timerEl = document.getElementById("timer");
console.log(timerEl);
var secondsLeft = 90;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Time Remaining: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      //sendMessage();
    }

  }, 1000);
}

var startButton = document.querySelector("#btn");

function startGame () {
    startButton.addEventListener("click", function (event) {
    setTime();
    })
};
startGame();
