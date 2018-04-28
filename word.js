var Letter = require('./letter.js')

// word constructor
function Word(){
    this.letters = [],

    this.wordToGuess = function(word){
        //create a new Letter obj for each letter, push them to the array
        for(i in word){
            var letter = new Letter(word[i]);
            this.letters.push(letter)
            if(letter.character == ' '){
                letter.guessed = true;
                letter.character = '  '
            }
        }
    }, 
    // call the toString method on each letter obj
    this.displayWord = function(){
        console.log(this.letters.join(' '))
    },

    // run the processGuess method on each letter obj
    this.newGuess = function(userGuess){
        var correct = false;
        this.letters.forEach(letter => {
            if(letter.processGuess(userGuess)){
                correct = true;
            }
        });
        return correct        
    }
}


module.exports = Word;