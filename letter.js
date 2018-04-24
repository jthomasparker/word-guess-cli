

function Letter(character){
    this.character = character,
    this.guessed = false,

    this.toString = function(){
        if(this.guessed){
            return this.character
        } else {
            return '_'
        }
    }, 

    this.processGuess = function(userGuess){
        if(userGuess === this.character){
            this.guessed = true;
            console.log("Correct!")
        }// else {
          //  this.guessed = false;
       // }
    }
}



module.exports = Letter;