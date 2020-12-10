var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

function whoWins() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
      document.querySelector("h1").innerHTML = "DRAW!";
  }

}

whoWins();


// function getRandomInt(min,max) {
//   return min + Math.round ((max-min) * Math.random());
// }
// var randomNumber1 = getRandomInt(1,6);
// var src1 = "images/dice" + randomNumber1 + ".png";
// document.querySelector(".img1").setAttribute("src", src1);
//
// var randomNumber2 = getRandomInt(1,6);
// var src2 = "images/dice" + randomNumber2 + ".png";
// document.querySelector(".img2").setAttribute("src", src2);

// function whoWins() {
//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
//   } else if (randomNumber2 > randomNumber1) {
//       document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
//   } else {
//       document.querySelector("h1").innerHTML = "DRAW!";
//   }
//
// }
//
// whoWins();
