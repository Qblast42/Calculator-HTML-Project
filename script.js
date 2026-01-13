let display =  document.getElementById("display"); // Assigns the site tom a variable
let ANS = '';  // Varibale assigned to the ANS key
const calculationKeys = ['+','-','/','*','.'];  // Array of allowed function keys

function appendValue(value) {
    if(display.innerText == '') {
        display.innerText = value;
    }
    else {
        display.innerText += value;
    }
}
// Adds the selected value to the calculator display.

function clearDisplay() {
    display.innerText = '';
}
// Reverts the display to its default state.

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
            //Prevents ANS being assigned to error values
        }
    } catch(e) {
        display.innerText = "Error";
        setTimeout(clearDisplay, 1500);
        // Catches any error and display a temporary error message 
    }
// Evalutes the calculation of the display, then rounds it to 3s.f

}
function deleteLast() {
    let text = display.innerText;
    display.innerText = text.length > 1 ? text.slice(0,-1) :'';
}
// Deletes the last charcters on the calauclator display

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
})
//Cehcks if the key pressed corresponds to a specific calulcator key, if so performs the relevant function

if (display.innerText == "Nan") {
    display.innerText = " ";
}

if (display.innerText == "Infinity") {
    setTimeout(clearDisplay, 1500);
}

// These conditionals automatically clear the display of improper number values