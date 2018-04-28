var Word = require('./word.js')
var inquirer = require('inquirer')
var userGuesses = []


var movies = ["Titanic", "The Matrix", "A Few Good Men", "Aladdin", "American Beauty", "The Big Lebowski", "Braveheart", "Dances with Wolves",
"Fargo", "Fight Club", "Forest Gump", "Ghost", "Goodfellas", "Good Will Hunting", "Home Alone", "Independence Day", "Jerry Macguire", "Jurassic Park", 
"The Lion King", "Men In Black", "Pretty Woman", "Pulp Fiction", "Saving Private Ryan", "Schindlers List", "Seven", "The Shawshank Redemption", "The Silence of the Lambs", 
"The Sandlot", "The Sixth Sense", "Tombstone", "Toy Story", "Trainspotting", "The Truman Show", "The Usual Suspects"]

function chooseMovie(){
    return movies[Math.floor(Math.random() * movies.length)]
}

// starts a new game
function newGame(){
    console.log(newGameDecoration())
    var word = new Word()
    word.wordToGuess(chooseMovie())
    word.displayWord()
    userGuesses = [];
    playGame(word, 10)
}

// main gameplay logic
function playGame(word, guessCount){
    if(guessCount > 0){
    inquirer.prompt([
        {
        name: "letter",
        message: "Guess Letter"
        }
        ]).then(function(userGuess){
            userGuess.letter = userGuess.letter.toUpperCase()
            // check to see if the letter has been guessed or not
            if(userGuesses.indexOf(userGuess.letter) === -1){
                userGuesses.push(userGuess.letter)
                // process the guess
                word.newGuess(userGuess.letter)
                word.displayWord()
                if(word.newGuess(userGuess.letter)){
                    console.log("\nCorrect!")
                } else {
                    guessCount--
                    console.log("\nIncorrect!\nGuesses Remaining: " + guessCount + "\n")
                }
            } else {
                word.displayWord()
                console.log("\nYou already guessed that!\nTry again!")
            }
            // check to see if the user has guessed the complete word
            if(!gameStatus(word)){
            playGame(word, guessCount)
            } else {
                word.displayWord();
                console.log("\nCongrats, you win!\n")
                endGame();
                
            }
        })
    } else {
        // set all the letters to true so they'll display the answer
        word.letters.forEach(letter => {
            letter.guessed = true;
        });
        console.log("\nGame Over! You lose!")
        console.log("The correct answer was:\n")
        word.displayWord()
        endGame()
    }
}

// see if they want to play again
function endGame(){
    inquirer.prompt([
        {
            name: "confirm",
            message: "Play Again?",
            type: "confirm"
        }
    ]).then(function(result){
        if(result.confirm){
            newGame();
        } else {
            console.log("Thanks for playing!")
        }
    })
}

// just for fun
function newGameDecoration(){
    decoration =  "\n |********************|\n"
    decoration += " |********************|\n"
    decoration += " |  Guess That Movie  |\n"
    decoration += " |    90's Edition    |\n"
    decoration += " |********************|\n"
    decoration += " |********************|\n"
    decoration += " **********************\n"
    return decoration
};

// checks to see if the user has guessed all the letters in the word
function gameStatus(word){
    var userWins = true;
    for(i in word.letters){
        if(!word.letters[i].guessed){
            userWins = false;
        }
    }
    return userWins;
};

newGame()