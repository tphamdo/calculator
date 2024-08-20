let a = null, op = null, b = null;
//let displayValue = '';
let isRes = false;
let opClicked = false;

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const ops = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        console.log(a,op,b);
        if (isRes) {
            isRes = false;
            //displayValue = digit.textContent;
            display.textContent = digit.textContent;
            //console.log(displayValue);
        } else {
            // displayValue += digit.textContent;
            display.textContent += digit.textContent; 
        }

    });
});

ops.forEach(o => {
    o.addEventListener('click', () => {
        if (!display.textContent) return;
        if (!a) {
            a = +display.textContent;
        }
        if (!op) {
            op = o.textContent;
        } else {
            b = +display.textContent;
            console.log(a,op,b);
            a = operate(a,op,b);
            displayOpRes(a)
            //displayValue = display.textContent;
            op = o.textContent;
            b = null;
        }
        isRes = true;
    });
});

equal.addEventListener('click', () => {
    if (!a || !op) return;
    b = +display.textContent;
    a = operate(a,op,b);
    displayOpRes(a)
    op = null;
    b = null;
    isRes = true;
});

clear.addEventListener('click', () => {
    clearData();
    display.textContent = '';
});

function displayOpRes(res) {
    console.log(res, typeof(res));
    if (res == Infinity || res == -Infinity) {
        console.log("here");
        clearData();
        display.textContent = "GOOD TRY";
    } else {
        display.textContent = res;
    }
}

function clearData() {
    a = null;
    op = null;
    b = null;
}

function operate(a,op,b) {
    switch(op) {
        case '+':
            return add(a,b); 
        case '-':
            return subtract(a,b); 
        case '*':
            return multiply(a,b); 
        case '/':
            return divide(a,b); 
        default:
            console.error(`invalid operator ${op}`)
            break;
    }
}


function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}
