// // declaring variable so all functions can use them
// let sum;
// let num1 = 0;
// let num2 = 0;


// function addBy() {
//     // get element by id in the html
//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;

//     //reassigning the sum variable with the text 'plus'
//     sum = 'plus';

//     //get the id "symbol" and make its inner text say '+' Example: <p>+</p>
//     document.getElementById("symbol").innerText = '+';
// }

// function divideBy() {
//     // get the element by id in html
//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;

//     // reassigning teh sum with the text divide
//     sum = 'divide';

//     // get the id "symbol" and make its inner text say'/' Example: <p>/</p>
//     document.getElementById("symbol").innerText = '/';
// }
// // calculate the sum
// function calculate() {
//     if (sum === 'plus') {
//         document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
//     } if (sum === 'divide') {
//         document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
//     } else {

//     }
// }
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('fizzBuzz')
        } else if (i % 3 === 0) {
            console.log('fizz');

        } else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i)
        }
    }
}
// fizzBuzz();