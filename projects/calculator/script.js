const resultDiv = document.getElementById("resultDiv");
const specialCharacters = ["+", "-", "*", "/"];
var equationCompleted = false;

function addValue(newValue) {
    if(resultDiv.innerText == "0" || (equationCompleted && !specialCharacters.includes(newValue))){
        resultDiv.innerText = newValue;
        equationCompleted = false;
    } else {
        let oldValue = resultDiv.innerText;
        const lastCharacter = oldValue[oldValue.length - 1];
        if(specialCharacters.includes(lastCharacter) && specialCharacters.includes(newValue)){
            oldValue = oldValue.substring(0, oldValue.length -1);
            resultDiv.innerText = oldValue + newValue;
        } else {
            resultDiv.innerText += newValue;
        }
        equationCompleted = false;
    }
}

function clearScreen() {
    resultDiv.innerText = "0";
}

function calculate() {
    const equation = resultDiv.innerText;
    const result = eval(equation);
    resultDiv.innerText = result;
    equationCompleted = true;
}