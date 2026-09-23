let playerScore = 0;
let computerScore = 0;
let scissor = document.getElementById('scissors');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let userMove = document.getElementById('user_move_img');
let computerMove = document.getElementById('computer_move_img');
let displayPlayerScore = document.getElementById('player_score');
let displayComputerScore = document.getElementById('computer_score');
let winner = document.getElementById('winner');
let restartButton = document.getElementById('restart');
rock.onclick = function() {
    handleMove(11, 'image/rock.png');
};

paper.onclick = function() {
    handleMove(22, 'image/paper.png');
};

scissor.onclick = function() {
    handleMove(33, 'image/scissors.png');
};
function handleMove(userMoveResId, userImageSrc) {
     userMove.src = userImageSrc;
    let random = Math.floor(Math.random() * 3);
    let randomImage = ['image/paper.png', 'image/rock.png', 'image/scissors.png'];
    let computerMoveResId = randomImage[random];
    computerMove.src = computerMoveResId;
    let computerMovenumber = [22, 11, 33];
    let computerMoveId = computerMovenumber[random];
    compareMoves(userMoveResId, computerMoveId);
}

restartButton.addEventListener('click', function () {
    userMove.src = 'image/you.png';
    computerMove.src = 'image/question_mark.png';
    playerScore = 0;
    computerScore = 0;
    winner.textContent = "";
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    scissor.style.display = "inline";
    paper.style.display  = "inline";
    rock.style.display  = "inline";
});

function compareMoves(userMoveResId, computerMoveResId) {
    if (playerScore < 4 && computerScore < 4) {
        winner.textContent = "sda";
        if (userMoveResId == computerMoveResId) {
            winner.textContent = "It is equal";
        } else if (
            (userMoveResId == 33 && computerMoveResId == 22) ||
            (userMoveResId == 11 && computerMoveResId == 33) ||
            (userMoveResId == 22 && computerMoveResId == 11)
        ) {
            playerScore++;
            displayPlayerScore.textContent = playerScore;
            winner.textContent = "";
        } else if ((computerMoveResId == 33 && userMoveResId == 22) ||
            (computerMoveResId == 11 && userMoveResId == 33) ||
            (computerMoveResId == 22 && userMoveResId == 11)) {
            computerScore++;
            displayComputerScore.textContent = computerScore;
            winner.textContent = "";
        }
    } else {
        if (playerScore == 4) {
            playerScore++;
            displayPlayerScore.textContent = playerScore;
            winner.innerText = "🎉🎉You are the winner🎉🎉";
            userMove.src = 'image/img.png';
            computerMove.src = 'image/lose.png';
            disableButtons();
        } else if (computerScore == 4) {
            computerScore++;
            displayComputerScore.textContent = computerScore;
            winner.textContent = "🎉🎉Computer is the winner🎉🎉";
            computerMove.src = 'image/img.png';
            userMove.src = 'image/lose.png';
            disableButtons();
        }
    }
}

function disableButtons() {
    scissor.style.display = "none";
    paper.style.display = "none";
    rock.style.display = "none";
}
