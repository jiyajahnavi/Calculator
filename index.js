const display = document.getElementById("display");
let resultDisplayed = false; 

function appendToDisplay(input) {
    if (resultDisplayed) {
        
        display.value = input;
        resultDisplayed = false;
    } else {
        
        if (display.value === "Error" || display.value === "Infinity" || display.value === "-Infinity" || display.value === "NaN") {
            display.value = "";
        }
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    resultDisplayed = false;
}

function calculate() {
    try {
        const result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
            resultDisplayed = true; 
        }
    } catch (error) {
        display.value = "Error";
        resultDisplayed = true; 
    }
}
