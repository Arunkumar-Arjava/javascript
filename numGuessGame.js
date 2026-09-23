let answer = Math.floor((Math.random() * 50) + 1);
let guess = 5;
let winner = 0;
let message = document.getElementById("status");
let displayScore = document.getElementById("attemptcounter");
let checkBoxInput = document.getElementById("number");
let guesscounter = document.getElementById("guesscounter");
let win = document.getElementById("scorecounter");
let displayImage = document.getElementById("result");
let displayAnswer = document.getElementById("nomoreattempts");
document.getElementById("other").style.display = "none";
let sound = document.getElementById('backgroundSound');

function result() {
    let userInput = Number(document.getElementById('guess').value);
    
    if (!userInput || userInput < 0 || userInput > 50) {
        alert("Please enter a valid number between 0 and 50");
        return;
    }
    
    guesscounter.textContent += " " + userInput + ",";
    
    // முதல்ல correct answer-ஆ check பண்ணனும்
    if (userInput === answer) {
        sound.src = "image/success-fanfare-trumpets-6185.mp3";
        sound.play();
        message.textContent = "Well Done. You Correctly Guessed That The Number Was " + answer + ". Try Another Number.";
        message.style.fontSize = '16px';
        displayImage.style.backgroundImage = 'url(image/winners-trophy-clip-art.jpg)';
        winner++;
        win.textContent = winner;
        document.getElementById("streakcounter").textContent = guess;
        displayScore.textContent = guess + "/5";
        endGame();
        return;
    }
    
    // தப்பா இருந்தா மட்டும் guess-ஐ குறைக்கனும்
    guess--;
    displayScore.textContent = guess + "/5";
    
    if (userInput > answer) {
        sound.src = "image/Buzzer sound effect.mp3";
        sound.play();
        displayImage.style.backgroundImage = "url(image/plane.webp)";
        message.textContent = "Too High...Guess Lower";
    } else {
        sound.src = "image/Buzzer sound effect.mp3";
        sound.play();
        displayImage.style.backgroundImage = "url(image/low-symbol-vector-1746547.jpg)";
        message.textContent = "Too Low...Guess Higher";
    }
    
    if (guess === 0) {
        sound.src = "image/Lose sound effects.mp3";
        sound.play();
        displayImage.style.backgroundImage = "url(image/10584701-you-lose.jpg)";
        message.textContent = "You Lose! You Ran Out Of Attempts. The Number Was " + answer + ". Try Another Number.";
        endGame();
    }
}

function endGame() {
    document.getElementById("other").style.display = "block";
    document.getElementById("submit").style.display = "none";
    document.getElementById('guess').style.display = "none";
    document.getElementById('giveup').style.display = "none";
}

function reset() {
    answer = Math.floor((Math.random() * 50) + 1);
    guess = 5;
    displayScore.textContent = guess + "/5";
    document.getElementById("streakcounter").textContent = 0;
    guesscounter.textContent = "";
    message.textContent = "Try To Guess The Whole Number Between 0 And 50.";
    message.style.fontSize = '16px';
    displayImage.style.backgroundImage = "url(image/question-mark.webp)";
    document.getElementById('guess').value = "";
    document.getElementById("other").style.display = "none";
    document.getElementById("submit").style.display = "block";
    document.getElementById('guess').style.display = "block";
    document.getElementById('giveup').style.display = "block";
    displayAnswer.textContent = "";
    win.textContent = winner;
}

function giveup() {
    message.style.fontSize = '16px';
    message.textContent = "Did You Give Up? The Number Was " + answer + ". Try Another Number.";
    endGame();
}
