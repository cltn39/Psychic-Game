
//Choices of letters that computer can choose from
var computerChoices =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Initial numbers of Wins, Loses, and Guesses Left
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var userGuessHistory = [];

//Create varuables that hold references to the places in the HTML where we want to display things.
var directionText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var losesText = document.getElementById("loses");
var guessLeftText = document.getElementById("guessLeft");
var userGuessText = document.getElementById("userGuessHistory");

//randomly chooses a choice from the options array. This is the computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//log of computerGuess:
    console.log("--computer's guess--");    
    console.log(computerGuess);
    console.log("---------------------------------");
//Press key event
document.onkeyup = function(event) {
    
//determines which key was pressed.
var userGuess = event.key;
//log of the user guess:
    console.log("--User's guess--");
    console.log(userGuess);
//make sure that all the inputs are lowercase.
    userGuess = userGuess.toLowerCase();


//this logic determines the outcome of the game
if (!userGuessHistory.includes(userGuess)) {   
    
    userGuessHistory.push(userGuess);
    
    
    if (userGuess === computerGuess) {
         wins++;
         guessesLeft = 8;
         userGuessHistory = [];
         computerGuess= computerChoices[Math.floor(Math.random() * computerChoices.length)];
        } else {
            guessesLeft--;
        }
    //Adding input history of the user's choices

    //Display the direction when keys are pressed.
    directionText.textContent = "Can you actually guess what I am thinking of??";
        
    // Display of lost games when all the guessleft are gone
        if (guessesLeft === 0) {
            losses++
            guessesLeft =8;
            userGuessHistory = [];
            computerGuess= computerChoices[Math.floor(Math.random() * computerChoices.length)];
        } 
        
    var userGuesses = userGuessHistory.join(', ');
    //Adding input history of the user's choices
    userGuessText.textContent = "Your Guesses so far: " + userGuessHistory.join(', ');
        
    // Display the user and computer guesses, and wins/losess/ties.
    winsText.textContent = "wins: " + wins;
    guessLeftText.textContent = "Guesses Left: " + guessesLeft;
    losesText.textContent = "losses: " + losses;
    }
};

