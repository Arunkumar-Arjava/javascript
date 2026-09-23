function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let displayResult = document.getElementById('result');

    if (!weight || !height || weight <= 0 || height <= 0) {
        displayResult.textContent = 'Please enter valid positive weight and height values.';
        return;
    }

    height = height / 100;
    let userBMI = bmi_calc(weight, height);
    let BMIresult;

    if (userBMI <= 18.0) {
        BMIresult = `Your BMI is ${userBMI.toFixed(2)}. You are underweight. 😒😒😢`;
    } else if (userBMI <= 25.0) {
        BMIresult = `Your BMI is ${userBMI.toFixed(2)}. You are in a healthy weight range. 🥳👌`;
    } else if (userBMI <= 35.0) {
        BMIresult = `Your BMI is ${userBMI.toFixed(2)}. You are overweight. 😧😨`;
    } else {
        BMIresult = `Your BMI is ${userBMI.toFixed(2)}. You are in the obesity range. 😱`;
    }

    displayResult.textContent = BMIresult;
}

function bmi_calc(weight, height) {
    return weight / (height * height);
}
