var firstRow = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
var secondRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", ""];
var thirdRow = ["CapsLock", "a", "b", "c", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"];
var fourthRow = ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"];

var pickRow = (Math.floor(Math.random() * 4));
if (pickRow === 0) {
    pickLetter = firstRow[Math.floor(Math.random() * firstRow.length)];
}
if (pickRow === 1) {
    pickLetter = secondRow[Math.floor(Math.random() * secondRow.length)];
}
if (pickRow === 2) {
    pickLetter = thirdRow[Math.floor(Math.random() * thirdRow.length)];
}
if (pickRow === 3) {
    pickLetter = fourthRow[Math.floor(Math.random() * fourthRow.length)];
}
var pickLetter;
var userGuess;
var userWins = 0;
var userLosses = 0;
var guesses = [];
var counter = 5;
var html;
var playAgain = "You win! Press Another Key to Play AGAIN!";

document.onkeyup = function (event) {
    if (counter > 1) {
        console.log(pickLetter);
        console.log(pickRow);
        userGuess = event.key;
        guesses.push(userGuess);
        if (pickLetter === userGuess) {
            userWins++;
            counter = 0;
            guesses = [];
            document.querySelector("#playAgain").innerHTML = playAgain;

        } else {
            userLosses++;
            counter--;
        }
    } else {
        counter = 5;
        guesses = [];
        pickRow = (Math.floor(Math.random() * 4));
        if (pickRow === 0) {
            pickLetter = firstRow[Math.floor(Math.random() * firstRow.length)];
        }
        if (pickRow === 1) {
            pickLetter = secondRow[Math.floor(Math.random() * secondRow.length)];
        }
        if (pickRow === 2) {
            pickLetter = thirdRow[Math.floor(Math.random() * thirdRow.length)];
        }
        if (pickRow === 3) {
            pickLetter = fourthRow[Math.floor(Math.random() * fourthRow.length)];
        }
        document.querySelector("#playAgain").innerHTML = "";
    }
    html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of, its on the #" + pickRow +
        " row of the keyboard (row #0 is the numbers row)</p>" +
        "<p>You chose: " + userGuess + "</p>" +
        "<p>wins: " + userWins + "</p>" +
        "<p>losses: " + userLosses + "</p>" +
        "<p>Your Guesses so far " + guesses +
        "<p>Guesses Left: " + counter;

    document.querySelector("#game").innerHTML = html;


}