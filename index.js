var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "/images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "/images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice2);

var text = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
    text.innerHTML = "Player 1 wins! 🎉";
}
else if(randomNumber1 < randomNumber2) {
    text.innerHTML = "Player 2 wins! 🎉";
} else {
    text.innerHTML = "It's a draw, refresh again!";
}