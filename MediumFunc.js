

function MediumFunc(){

    //sets the amount of guesses the user has
    var guessCount = parseInt(prompt("Choose the number of guesses you would like to have(choose between 1-10) ")); 
    
    //loop to make sure the user does not choose a number outside the given range 
    while(guessCount>10 || guessCount<1){
        alert("ERROR!! choose the number in the given range"); 

        var guessCount = parseInt(prompt("Choose the number of guesses you would like to have(choose between 1-10) "));
            
    }

    //start of the game 
    var guess = parseInt(prompt("Guess the mystery number: "));    //user's guess
    var answer = Math.floor(Math.random()*4+1); //answer
    var outcome = false; 

    //for loop to make sure the # of guesses does not go over guessCount
    for (let i=guessCount; i>1; i--){
        
    //right answer
    if (guess == answer){
        outcome = true; 
        i = 0;
    }
    //wrong answer
    else{
        alert("Oops you have guessed the wrong number, Try again");
    }
    
    //to alert user of final attempt
    if (i==1){
        alert("This is your last attempt, choose wisely"); 
    }

    //alerts user of remaining attempts 
    else if (i>0){
        j = i-1; 
        alert ("You have " + j + " attempts remaining"); 
    }

    if (outcome == false){
    var guess = parseInt(prompt("Guess the mystery number: "));
    }
    }

    if (outcome == true){
        alert("CONGRATS you won! "); 
    }

    else{
        alert("You lost... better luck next time, the mystery number was " + answer); 
    }


}