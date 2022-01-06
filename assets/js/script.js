var timerEl = document.getElementById("timer");
var secondsLeft = 90;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}

var quizDiv = document.getElementById("quiz");
var questions = [
    {
        prompt: "What is my favorite coding language?",
        options: ["HTML", "CSS", "JS", "Python"],
        answer: "JS",
    },
    {
        prompt: "Which resource is most helpful?",
        options: ["Mozilla", "w3schools", "codestack", "Bootstrap"],
        answer: "Bootstrap",
    },
];
var questionIdx = 0;

function handleOptionClick(event) {
    // IF user clicked an answer-btn
    if (event.target.matches(".answer-btn")) {
        alert(event.target.dataset.answers === "1");
        questionIdx += 1;
        openQuestions();
        console.log(event.target);
        if (event.target.dataset.answers === "0") {
            secondsLeft -= 10;
        }
    }
}

function openQuestions() {
    quizDiv.innerHTML = "";

    if (questionIdx >= questions.length) {
        alert("No more questions");
        endGame();
        return;
    }

    var question = questions[questionIdx];
    var h2 = document.createElement("h2");
    h2.textContent = question.prompt;
    quizDiv.append(h2);

    var answersDiv = document.createElement("div");
    answersDiv.classList.add("answers");
    quizDiv.appendChild(answersDiv);

    for (var i = 0; i < question.options.length; i++) {
        var optionText = question.options[i];
        var btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = optionText;

        if (optionText === question.answer) {
            btn.dataset.answers = 1;
        } else {
            btn.dataset.answers = 0;
        }

        answersDiv.appendChild(btn);
    }
}
quizDiv.addEventListener("click", handleOptionClick);

var scoreDiv = document.getElementById("score");
function displayScores () {
    var ol = document.createElement("ol");
    ol.textContent = "Highscores: " + highscores;
    scoreDiv.append(ol);
}

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
function endGame () {
    alert("End of Game");
    var score = secondsLeft;
    timerEl.style.display = "none";
    highscores.push(score);
    var top3 = highscores.sort().slice(-3);
    localStorage.setItem("highscores", JSON.stringify(top3));
    displayScores();
}

var startButton = document.querySelector("#btn");
function startGame() {
    startButton.addEventListener("click", function (event) {
        setTime();
        openQuestions();
    })
};
startGame();