let display = document.getElementById('display');
let cursorPos = null; // tracks insert position when inside function brackets

const TRIG_FUNCS = ['sin(', 'cos(', 'tan(', 'log('];

function appendToDisplay(value) {
    if (display.textContent === 'Syntax Error') {
        display.textContent = value === '.' ? '0.' : value;
        cursorPos = null;
        return;
    }

    if (cursorPos !== null) {
        let text = display.textContent;
        display.textContent = text.slice(0, cursorPos) + value + text.slice(cursorPos);
        cursorPos += String(value).length;
        return;
    }

    if (value === '.') {
        if (display.textContent === '0') {
            display.textContent = '0.';
        } else {
            display.textContent += value;
        }
        return;
    }

    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function pi() {
    let pi_value = Math.PI;
    if (display.textContent === '0' || display.textContent === 'Syntax Error') {
        display.textContent = pi_value;
        cursorPos = null;
    } else if (cursorPos !== null) {
        let text = display.textContent;
        display.textContent = text.slice(0, cursorPos) + pi_value + text.slice(cursorPos);
        cursorPos += String(pi_value).length;
    } else {
        display.textContent += pi_value;
    }
}

function powerOfTen() {
    applyScientificOperation('^10');
}

function cancel() {
    display.textContent = 0;
    cursorPos = null;
}
function root() {
    applyScientificOperation('sqrt');
}
function cube() {
    applyScientificOperation('^3');
}
function squar() {
    applyScientificOperation('^2');
}
function applyScientificOperation(operation) {
    try {
        const expression = display.textContent;
        display.textContent = operation === 'sqrt'
            ? math.evaluate(`sqrt(${expression})`)
            : math.evaluate(`(${expression})${operation}`);
        cursorPos = null;
    } catch (error) {
        display.textContent = 'Syntax Error';
        cursorPos = null;
    }
}
function deleteLast() {
    let text = display.textContent;
    if (TRIG_FUNCS.some(f => text === f + ')')) {
        display.textContent = '0';
        cursorPos = null;
    } else if (cursorPos !== null && cursorPos > 0) {
        display.textContent = text.slice(0, cursorPos - 1) + text.slice(cursorPos);
        cursorPos -= 1;
        // if display becomes like 'sin()' with nothing inside, reset
        if (TRIG_FUNCS.some(f => display.textContent === f + ')')) {
            cursorPos = display.textContent.length - 1;
        }
    } else if (text.length > 1) {
        display.textContent = text.slice(0, -1);
    } else {
        display.textContent = '0';
        cursorPos = null;
    }
}
function dot() {
    const currentNumber = display.textContent.split(/[+\-*/%()]/).pop();
    if (!currentNumber.includes('.')) {
        appendToDisplay('.');
    }
}
function operator(value) {
    if (TRIG_FUNCS.includes(value)) {
        // append like sin() and place cursor before )
        if (display.textContent === '0' || display.textContent === 'Syntax Error') {
            display.textContent = value + ')';
        } else {
            display.textContent += value + ')';
        }
        cursorPos = display.textContent.length - 1;
    } else {
        cursorPos = null;
        appendToDisplay(value);
    }
}
function equal() {
    var userVal = display.textContent;
    cursorPos = null;
    try {
        let result = math.evaluate(userVal.replace(/log\(/g, 'log10('));
        display.textContent = parseFloat(result.toFixed(10));
    } catch (error) {
        display.textContent = 'Syntax Error';
    }
}

// Allow the calculator to be used from a laptop keyboard as well as the buttons.
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/^\d$/.test(key)) {
        appendToDisplay(key);
        return;
    }

    if (key === '.') {
        dot();
        return;
    }

    if (['+', '-', '*', '/', '%', '(', ')'].includes(key)) {
        operator(key);
        return;
    }

    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        equal();
        return;
    }

    if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
        return;
    }

    if (key === 'Escape' || key.toLowerCase() === 'c') {
        cancel();
    }
});
