var addition = document.getElementById('plus')
var subtraction = document.getElementById('minus') 
var multiplication = document.getElementById('multiple')
var division = document.getElementById('divide')

var result = document.getElementById("sum")
var inputValue = document.getElementById("calculatorInput")
var num1 , num2; 

addNumbers.addEventListener('click', function () {

        num1 = parseInt(inputValue.value)
        num2 = parseInt(inputValue.value)
        inputValue.value = 0;
        result.innerHTML = num1 + num2;
        num1 = 0
});