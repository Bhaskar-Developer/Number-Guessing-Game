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
    winningNumber = setRandomNumber(min,max) //This function is used to generate a random number between 1 an d 10
    guessesLeft = 3; //We give the player with 3 guesses

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

//Play Again Event Listener

//mousedown even means only mouse push down
//click = mousedown+mouseup
//click will cause the window to flash and not display Play Again button on UI
//Hence we listen for mousedown event 
guessBtn.addEventListener('mousedown',(e) => {
  //check if the target we are listening to is the play again button
  if(e.target.className === 'play-again') {
    //reload the window once Play Again button is clicked
    window.location.reload()
  }
})

//Listen for Guess (submit button) 
guessBtn.addEventListener('click', () => {
  //The entered input is received as String
  //We parse the received input as a Number
  let guess = parseInt(guessInput.value)
  
  //Validate the input guess input
  //make sure it is a number and lies between min and max
  if(isNaN(guess) || guess < min || guess > max) {
    //Tell the player to enter valid input by showing a Message in the UI
    setMessage(`Please enter a number between ${min} and ${max}`,'red')
    return
  } 

  //Check if Won i.e. the player has guessed the correct number
  if(guess===winningNumber) {
    //Game Over - Player has Won 
    gameOver(true,`${winningNumber} is the correct guess. You Won!`)
    
    //Give an option for the player to play again
    playAgain()
  } else {
    //wrong number guessed
    //reduce the number of guesses
    guessesLeft-=1;

    //check if there is any guesses remaining
    //if remaining guesses is 0 then its game over
    if(guessesLeft === 0) {
      //Game Over - Player Lost
      gameOver(false,`Game Over. You Lost. The correct number was ${winningNumber}`);
      //Give the player an option to play again
      playAgain()
    } else {
      //Game Not Over - Continue playing i.e. The are still guesses remaining
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
  //If won=true then color=green else color=red
  won === true ? color = 'green' : color = 'red'
  
  //disable the input if the remaining guesses are zero
  if(guessesLeft !== 0) {
    guessInput.disabled = false;
  } else { //disable the input if guesses becomes zero
    guessInput.disabled = true;
  }
  //set the border color based on lost or won
  guessInput.style.borderColor = color
  //Let the Player know that the guess was correct or wrong by showing a message on the UI.    
  setMessage(message,color)
}
      
function playAgain() {
  //change the guess button text to Play Again
  guessBtn.value = 'Play Again'
  //append a class to the guess button. This will be used to target the button during event delegation where the window is reloaded
  guessBtn.className += 'play-again'
  //disable the guess input
  guessInput.disabled = true
}

//generate Random number between min and max. This also includes min and max
function setRandomNumber(min, max) {
  return Math.floor((Math.random()*(max-min+1)+min))
}