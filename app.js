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
    return
  } 

  //Check if Won i.e. the player has guessed the correct number
  if(guess===winningNumber) {
    //Game Over - Player has won
    gameOver(true,`${winningNumber} is the correct guess. You Won!`) 
  } else {
    //player loses
    //wrong number guessed
    //reduce the number of guesses
    guessesLeft-=1;

    //check if there is any guesses remaining

    //if remaining guesses is 0 which means game over
    if(guessesLeft === 0) {
      //Game Over - Player Lost
      gameOver(false,`Game Over. You Lost. The correct number was ${winningNumber}`);
    } else {
      //Game Not Over - Continue playing
      gameOver(false,`Wrong guess. You have ${guessesLeft} guesses left`)
    }
  }
})

function setMessage(msg,color) {
  message.textContent=msg
  message.style.color=color
}

function gameOver(won,message) {
  let color;
  //using ternary operator to set the value of color.
  //If won=true then color will be green else color will be red
  won === true ? color = 'green' : color = 'red'
  
  //disable the input and show the message on UI
  guessInput.disabled = true;
  //set the border color based on lost or won
  guessInput.style.borderColor = color
  //Tell The Player that the guess was correct by showing a message on the UI.    
  setMessage(message,color)
}
      