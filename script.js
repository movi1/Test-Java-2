// declaring variable so all functions can use them
let sum;
let num1 = 0;
let num2 = 0;


function addBy() {
    // get element by id in the html
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    //reassigning the sum variable with the text 'plus'
    sum = 'plus';

    //get the id "symbol" and make its inner text say '+' Example: <p>+</p>
    document.getElementById("symbol").innerText = '+';
}

function divideBy() {
    // get the element by id in html
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    // reassigning teh sum with the text divide
    sum = 'divide';

    // get the id "symbol" and make its inner text say'/' Example: <p>/</p>
    document.getElementById("symbol").innerText = '/';
}
// calculate the sum
function calculate() {
    if (sum === 'plus') {
        document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
    } if (sum === 'divide') {
        document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
    } else {

    }
}
