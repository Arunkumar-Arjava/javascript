function button() {
    let input = document.getElementById("number").value;
    document.getElementById("for").innerHTML = "";
    document.getElementById("While").innerHTML = "";
    if (input === "") {
        alert("Please enter a valid number.");
        return;
    }
    let num = parseInt(input);
    let forResult = "";
    for (let i = 1; i <= 10; i++) {
        forResult += `${i} x ${num} = ${num * i}<br>`;
    }
    document.getElementById("for").innerHTML = forResult;
    let whileResult = "";
    let i = 1;
    while (i <= 10) {
        whileResult += `${i} x ${num} = ${num * i}<br>`;
        i++;
    }
    document.getElementById("While").innerHTML = whileResult;
}

function submit() {
    let firstNumber = parseInt(document.getElementById("first").value);
    let secondNumber = parseInt(document.getElementById("second").value);
    let thirdNumber = parseInt(document.getElementById("third").value);

    let resultText;
    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (firstNumber > secondNumber) {
        if (firstNumber > thirdNumber) {
            resultText = "First Number is Big";
        } else if (firstNumber < thirdNumber) {
            resultText = "Third Number is Big";
        } else {
            resultText = "First and Third Numbers are Equal and Big";
        }
    } else if (firstNumber < secondNumber) {
        if (secondNumber > thirdNumber) {
            resultText = "Second Number is Big";
        } else if (secondNumber < thirdNumber) {
            resultText = "Third Number is Big";
        } else {
            resultText = "Second and Third Numbers are Equal and Big";
        }
    } else {
        if (firstNumber > thirdNumber) {
            resultText = "First and Second Numbers are Equal and Big";
        } else if (firstNumber < thirdNumber) {
            resultText = "Third Number is Big";
        } else {
            resultText = "All Three Numbers are Equal";
        }
    }

    document.getElementById("result").innerHTML = resultText;
}

function switch_value() {
    let userInput = parseInt(document.getElementById("age").value);
    let displayAge = document.getElementById("display_age");

    if (isNaN(userInput)) {
        displayAge.innerHTML = "Please enter a valid age.";
        return;
    }

    switch (true) {
        case (userInput < 10):
            displayAge.innerHTML = "You are a baby";
            break;
        case (userInput === 10):
            displayAge.innerHTML = "You are 10 years old";
            break;
        case (userInput > 10):
            displayAge.innerHTML = "You are an adult";
            break;
        default:
            displayAge.innerHTML = "Invalid age";
            break;
    }
}
