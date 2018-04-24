

function Letter(character){
    this.character = character,
    this.characterUpper = this.character.toUpperCase()
    this.guessed = false,

    this.toString = function(){
        if(this.guessed){
            return this.character
        } else {
            return '_'
        }
    }, 

    this.processGuess = function(userGuess){
        if(userGuess === this.characterUpper){
            this.guessed = true;
            return true;
        }// else {
          //  this.guessed = false;
       // }
    }
}



module.exports = Letter;