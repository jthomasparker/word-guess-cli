var Word = require('./word.js')
var inquirer = require('inquirer')


var movies = ["Titanic", "The Matrix", "A Few Good Men", "Aladdin", "American Beauty", "The Big Lebowski", "Braveheart", "Dances with Wolves",
"Fargo", "Fight Club", "Forest Gump", "Ghost", "Goodfellas", "Good Will Hunting", "Home Alone", "Independence Day", "Jerry Macguire", "Jurassic Park", 
"The Lion King", "Men In Black", "Pretty Woman", "Pulp Fiction", "Saving Private Ryan", "Schindlers List", "Seven", "The Shawshank Redemption", "The Silence of the Lambs", 
"The Sandlot", "The Sixth Sense", "Tombstone", "Toy Story", "Trainspotting", "The Truman Show", "The Usual Suspects"]

function chooseMovie(){
    return movies[Math.floor(Math.random() * movies.length)]
}

function newGame(){
    var word = new Word()
    word.wordToGuess(chooseMovie())
    word.displayWord()
    playGame(word, 10)
}

function playGame(word, guessCount){
    if(guessCount > 0){
    inquirer.prompt([
        {
        name: "letter",
        message: "Guess Letter"
        }
        ]).then(function(userGuess){
            word.newGuess(userGuess.letter)
            word.displayWord()
            guessCount--
            console.log("Guesses Remaining:", guessCount)
            playGame(word, guessCount)
        })
    } else {
        console.log("Game Over!")
    }
}

newGame()