var Letter = require('./letter.js')

function Word(){
    this.letters = [],

    this.wordToGuess = function(word){
        for(i in word){
            var letter = new Letter(word[i]);
            this.letters.push(letter)
        }
    }, 

    this.displayWord = function(){
        console.log(this.letters.join(' '))
    },

    this.newGuess = function(userGuess){
        this.letters.forEach(letter => {
            letter.processGuess(userGuess)
        });        
    }
}


module.exports = Word;