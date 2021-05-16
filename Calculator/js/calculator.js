var previousNumber = 0;
var operationType = '';


function addNumbers() {
        previousNumber = parseInt(document.getElementById('calculatorInput').value);
        operationType = "+";

        document.getElementById('calculatorInput').value = ' ';
}

function subtractNumbers() {
        previousNumber = parseInt(document.getElementById('calculatorInput').value);
        operationType = "-";

        document.getElementById('calculatorInput').value = ' ';
}

function multipleNumbers() {
        previousNumber = parseInt(document.getElementById('calculatorInput').value);
        operationType = "*";

        document.getElementById('calculatorInput').value = ' ';
}

function divideNumbers() {
        previousNumber = parseInt(document.getElementById('calculatorInput').value);
        operationType = "/";

        document.getElementById('calculatorInput').value = ' ';
}


function calculate() {
        var number1 = previousNumber;
        var number2 = parseInt(document.getElementById('calculatorInput').value);
        var result;

        if (operationType == "+"){
                result = number1 + number2;
        } else if (operationType == "-"){
                result = number1 - number2;
        } else if (operationType == "*"){
                result = number1 * number2;
        } else if (operationType == "/"){
                result = number1 / number2;
        }



        document.getElementById('calculatorInput').value = result;

}