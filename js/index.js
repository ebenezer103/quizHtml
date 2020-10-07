var correctMusic;
var wrongMusic;
var textBox;
var pictureBearer;
var levelText;
var score = 0;
var level = 0;
var answers = ["chemistry", "physics", "biology", "computer science", "art"]

window.onload = function () {
    pictureBearer = document.getElementById("pictureBearer");
    levelText = document.getElementById("levelNumber");

    correctMusic = document.getElementById("music");
    wrongMusic = document.getElementById("wrongMusic");
    textBox = document.getElementById("scienceGuessTextBox");
    // pictureBearer.src = "img/" + answers[level] + ".jpg";
    pictureBearer.src = "img/" + (answers[level].split(" ").join("")) + ".jpg";
}

function ValidationEvent() {
    if (textBox.value == "") {
        return (true)
    } else {
        eventHandler()
    }
}

function eventHandler() {
    var answer = textBox.value.toLowerCase();

    if (answer == answers[level]) {
        level++;
        score++;
        answerCorrect();
    } else {
        answerIncorrect();
    }
}

function answerCorrect() {
    displayDoggy();
    document.getElementById("scoreNumberText").innerHTML = `Score: ${score}/5`;
    timer(5000);
    correctMusic.play();
}

function answerIncorrect() {
    wrongMusic.play();
    document.getElementById("centeredDiv").style.display = "none";
    document.getElementById("badAnswer").style.display = "";
    clearText();
    setTimeout(function () { location.reload(); }, 4000);
}

function displayDoggy() {
    document.getElementById("centeredDiv").style.display = "none";
    document.getElementById("doggy").style.display = "";
}

function hideDoggy() {
    correctMusic.pause();
    clearText();
    changeImage();
    document.getElementById("centeredDiv").style.display = "";
    document.getElementById("doggy").style.display = "none";
}

function timer(seconds) {
    setTimeout(function () { hideDoggy() }, seconds);
}

function changeImage() {
    levelText.innerHTML = "Level " + (level + 1);
    pictureBearer.src = "img/" + (answers[level].split(" ").join("")) + ".jpg";
}

function clearText() {
    textBox.value = "";
}