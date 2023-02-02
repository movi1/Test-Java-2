
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 15 === 0) {
//             console.log('fizzBuzz')
//         } else if (i % 3 === 0) {
//             console.log('fizz');

//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         }
//         else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz();



// function myFunction() {
//     var x = document.getElementById("bar");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }