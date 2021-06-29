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
const game = document.querySelector('.game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
//We assign the min and max that we defined to UI variables minNum and maxNum
minNum.textContent=min
maxNum.textContent=max 

//Listen for Guess (submit button) 
guessBtn.addEventListener('click', () => {
  //The entered input is received as String
  //We parse the received input as a Number
  let guess = parseInt(guessInput.value)
  
  //Validate the input to check if it is a number and also check if the entered number lies between min and max
  if(isNaN(guess) || guess < min || guess > max) {
    //Tell the player to enter valid input by showing a Message in the UI
    setMessage(`Please enter a number between ${min} and ${max}`,'red')
  } 

  //Check if Won i.e. the player has guessed the correct number
  if(guess===winningNumber) {
    //disable the input and show the message on UI
    guessInput.disabled = true;
    //set the border color if guess input to green
    guessInput.style.borderColor = 'green'
    //Tell The Player that the guess was correct by showing a message on the UI.    
    setMessage(`${guess} was the correct Guess! You Won`,'green')
  } else {
    //
  }
})

function setMessage(msg,color) {
  message.textContent=msg
  message.style.color=color
}
      