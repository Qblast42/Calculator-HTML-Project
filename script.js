let display =  document.getElementById("display");
let ANS = '';
const calculationKeys = ['+','-','/','*','.'];

function appendValue(value) {
    if(display.innerText == '') {
        display.innerText = value;
    }
    else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '';
}

function calculate() {
    try{
        ANS = eval(display.innerText);
        ANS = Math.round(ANS * 1000) / 1000;
        display.innerText = ANS;
        if (ANS == "NaN" || ANS == "Infinity") {
            ANS = " ";
        }
        if (display.innerText == "NaN") {
        display.innerText = " ";
        }
    } catch(e) {
        display.innerText = "Error";
        setTimeout(clearDisplay, 1500);
    }

}
function deleteLast() {
    let text = display.innerText;
    display.innerText = text.length > 1 ? text.slice(0,-1) :'';
}

document.addEventListener('keydown', (event)=> {
    const IsNumeric = isFinite(event.key) && event.key !== " ";
    if(event.key ==  'Backspace') {
        deleteLast();
        event.preventDefault();
    }
    else if (IsNumeric) {
        appendValue(event.key);
        event.preventDefault();
    }
    else if (calculationKeys.includes(event.key)) {
        appendValue(event.key);
        event.preventDefault();
    }
    else if (event.key == 'Enter') {
        calculate();
        event.preventDefault();
    }
});

if (display.innerText == "Nan") {
    display.innerText = " ";
}

if (display.innerText == "Infinity") {
    setTimeout(clearDisplay, 1500);
}