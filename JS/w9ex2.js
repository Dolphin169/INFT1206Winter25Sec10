console.log("Hello")

function showOutput(){
    let name = document.querySelector('#first-name').value;
    document.querySelector('#output').textContent = "Hello " + name;
    document.querySelector('#output').style.color = 'blue';
}

document.querySelector("#btn").addEventListener('click',showOutput);