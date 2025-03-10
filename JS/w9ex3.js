console.log("Hello")

function showOutput(){
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    document.querySelector('#output').textContent = "The multiplcation of " + number1 + " and " + number2 + " is " + number1 * number2;
}

document.querySelector("#btn").addEventListener('click',showOutput);