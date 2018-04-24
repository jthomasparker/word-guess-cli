var Letter = require('./letter.js')

function Word(){
    this.letters = [],

    this.wordToGuess = function(word){
        for(i in word){
            var letter = new Letter(word[i]);
            this.letters.push(letter)
            if(letter.character == ' '){
                letter.guessed = true;
                letter.character = '  '
            }
        }
    }, 

    this.displayWord = function(){
        console.log(this.letters.join(' '))
    },

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