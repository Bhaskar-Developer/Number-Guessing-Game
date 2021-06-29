/*
Functions/Rules of the Game
-Player must gues a number between Min and the Max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-Let play choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNumber = 2 //for now
    guessesLeft = 3;

//UI elements
const game = document.querySelector('.')
