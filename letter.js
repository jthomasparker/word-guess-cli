
// letter constructor
function Letter(character){
    this.character = character,
    this.characterUpper = this.character.toUpperCase()
    this.guessed = false,

    // display the character if correct, _ if incorrect
    this.toString = function(){
        if(this.guessed){
            return this.character
        } else {
            return '_'
        }
    }, 
// determine if the userGuess matches
    this.processGuess = function(userGuess){
        if(userGuess === this.characterUpper){
            this.guessed = true;
            return true;
        }
    }
}



module.exports = Letter;