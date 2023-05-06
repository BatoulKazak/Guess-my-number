const CHECK_BUTTON = document.querySelector("#check-button"),
    PLAY_AGAIN_BUTTON = document.querySelector("#play-again-button"),
    SCORE_DISPLAYER = document.querySelector("#score-displayer"),
    INPUT = document.querySelector("#input"),
    RESULT_EMOJI = document.querySelector("#result :first-child"),
    RESULT_VALUE = document.querySelector("#result :last-child"),
    SCORE_VALUE = document.querySelector("#score :last-child"),
    HIGH_SCORE_VALUE = document.querySelector("#high-score :last-child")


let score = 20,
    heighScore = 0;

CHECK_BUTTON.addEventListener("click", (e) => {

    let randomNumber = Math.floor(Math.random() * 21);
    if (INPUT.value == randomNumber) {
        correctAnswer();
    } else if (INPUT.value == randomNumber - 1 || INPUT.value == randomNumber.value - 2 || INPUT.value == randomNumber + 1 || INPUT.value == randomNumber + 2) {
        nearCorrectAnswer();
    } else {
        wrongAnswer();
    }
})

PLAY_AGAIN_BUTTON.addEventListener("click", (e) => {
    playAgain();
})

function correctAnswer() {
    heighScore++;
    document.body.style.background = "var(--main-colour)";
    RESULT_EMOJI.innerText = "👑";
    RESULT_VALUE.innerText = "Correct Answer";
    HIGH_SCORE_VALUE.innerText = `High Score: ${heighScore}`;
}

function playAgain() {
    resetScreenColour();
    score = heighScore = 0;
    RESULT_EMOJI.innerText = "";
    RESULT_VALUE.innerText = "start guessing...";
    INPUT.value = "";
    SCORE_DISPLAYER.innerText = "?";
    SCORE_VALUE.innerText = "Score: 0";
    HIGH_SCORE_VALUE.innerText = "High Score: 0";
}

function nearCorrectAnswer() {
    resetScreenColour();
    score++;
    RESULT_EMOJI.innerText = "📈";
    RESULT_VALUE.innerText = "Too High"
    SCORE_DISPLAYER.innerText = score;
    SCORE_VALUE.innerText = `Score: ${score}`;
}

function wrongAnswer() {
    resetScreenColour();
    if (score == 0) { return; }
    score--;
    RESULT_VALUE.innerText = "Too Low";
    RESULT_EMOJI.innerText = "📉"
    SCORE_DISPLAYER.innerText = score;
    SCORE_VALUE.innerText = `Score: ${score}`;
}

function resetScreenColour() {
    document.body.style.background = "#333";
}