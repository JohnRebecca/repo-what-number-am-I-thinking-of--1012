// Team Simpletons, this is made by us and connot be published without our consent
var Username = prompt("Please enter your name with 3 numbers and 2 special characters: ");
var arrayNames = [];
arrayNames.push(Username);
var win = 0; //cal score
var totalE = 0; //counts the number of attempts
var percent = 0; //stores the final percent
var result = 0; //used in cal
var tot = 0; //used in cal
var url = "http://localhost:3000/post";


function EasyFunc() {
    document.body.style.backgroundColor = "rgb(195, 249, 219)";
    totalE = totalE + 1;
    //sets the amount of guesses the user has
    var guessCount = parseInt(prompt("Choose the number of guesses you would like to have(choose between 1-5) "));

    //loop to make sure the user does not choose a number outside the given range 
    while (guessCount > 5 || guessCount < 1) {
        alert("ERROR!! choose the number in the given range");

        var guessCount = parseInt(prompt("Choose the number of guesses you would like to have(choose between 1-5) "));

    }

    //start of the game 
    var guess = parseInt(prompt("Guess the mystery number between 1-10: ")); //user's guess
    var answer = Math.floor(Math.random() * 11) + 1; //answer
    var count = 0;
    var outcome = false;
    if (guess > 10 || guess < 0) {
        alert("Your input is not between 0 and 10, please enter a valid input");
    }

    //for loop to make sure the # of guesses does not go over guessCount
    for (let i = guessCount; i > 1; i--) {

        //right answer
        if (guess == answer) {
            outcome = true;
            i = 0;
            count = count + 1;
        }
        //wrong answer
        else {
            alert("Oops you have guessed the wrong number, Try again");
        }

        //to alert user of final attempt
        if (i == 1) {
            alert("This is your last attempt, choose wisely");
        }

        //alerts user of remaining attempts 
        else if (i > 0) {
            j = i - 1;
            alert("You have " + j + " attempts remaining");
        }

        if (outcome == false) {
            var guess = parseInt(prompt("Guess the mystery number: "));
        }
    }

    if (outcome == true) {
        document.getElementById("ans").innerHTML = "CONGRATS you won! ";

    } else {
        document.getElementById("ans").innerHTML = "You lost!!!<br> Better luck next time, the mystery number was " + answer;

    }
    /*var check = */
    scorecal(totalE, outcome);
    /*alert("Your score percentage is" + check + "%");*/

}

function MediumFunc() {
    document.body.style.backgroundColor = "rgb(160, 242, 243)";
    totalE = totalE + 1;

    //sets the amount of guesses the user has
    var guessCount = parseInt(prompt("Choose the number of guesses you would like to have(choose between 1-10) "));

    //loop to make sure the user does not choose a number outside the given range 
    while (guessCount > 10 || guessCount < 1) {
        alert("ERROR!! choose the number in the given range");

        var guessCount = parseInt(prompt("Choose the number of guesses you would like to have(choose between 1-10) "));

    }

    //start of the game 
    var guess = parseInt(prompt("Guess the mystery number between 1 to 20 : ")); //user's guess
    var answer = Math.floor(Math.random() * 4 + 1); //answer
    var outcome = false;
    if (guess > 20 || guess < 0) {
        alert("Your input is not between 0 and 20, please enter a valid input");
    }

    //for loop to make sure the # of guesses does not go over guessCount
    for (let i = guessCount; i > 1; i--) {

        //right answer
        if (guess == answer) {
            outcome = true;
            i = 0;
        }
        //wrong answer
        else {
            alert("Oops you have guessed the wrong number, Try again");
        }

        //to alert user of final attempt
        if (i == 1) {
            alert("This is your last attempt, choose wisely");
        }

        //alerts user of remaining attempts 
        else if (i > 0) {
            j = i - 1;
            alert("You have " + j + " attempts remaining");
        }

        if (outcome == false) {
            var guess = parseInt(prompt("Guess the mystery number: "));
        }
    }

    if (outcome == true) {
        document.getElementById("ans").innerHTML = "CONGRATS you won! ";

    } else {
        document.getElementById("ans").innerHTML = "You lost!!!<br> Better luck next time, the mystery number was " + answer;

    }
    scorecal(totalE, outcome);


}

function HardFunc() {
    document.body.style.backgroundColor = "rgb(213, 169, 244)";
    totalE = totalE + 1;
    //sets the amount of guesses the user has
    var c = parseInt(prompt("Please enter the number of tries you wish to have from 1-20 "));
    //loop to make sure the user does not choose a number outside the given range 
    while (c > 20 || c < 1) {
        alert("ERROR!! choose the number in the given range");

        var c = parseInt(prompt("Choose the number of guesses you would like to have(choose between 1-20) "));

    }
    var count = 0; //start of the game
    var a = Math.floor(Math.random() * 51) + 1; //answer
    var num = parseInt(prompt("Please enter positive interger between 0-50 : ")); //user's guess
    var outcome = false;
    // checks if the number guessed is between 0-50
    if (num > 50 || num < 0) {
        alert("Your input is not between 0 and 100, please enter a valid input");
    }
    //loop for checking the input 
    for (i = c; i > 1; i = i - 1) {
        //user wins
        if (a == num) {
            alert("you guessed it!!");
            count = count + 1;
        } else {
            alert("Oops you have guessed the wrong number, Try again");
        }
        //last atempt
        if (i == 1) {
            alert("This is your last attempt, choose wisely");
        }
        //alerts user of remaining attempts 
        else if (i > 0) {
            j = i - 1;
            alert("You have " + j + " attempts remaining");
        }
        if (outcome == false) {
            var num = parseInt(prompt("Guess the mystery number: "));
        }

    }
    if (outcome == true) {
        document.getElementById("ans").innerHTML = "CONGRATS you won! ";

    } else {
        document.getElementById("ans").innerHTML = "You lost!!!<br> Better luck next time, the mystery number was " + answer;

    }
    scorecal(totalE, outcome);


}

function scorecal(tot, outcome) {
    if (outcome == true) {
        win = win + 1;
    }
    var result = (win / tot) * 100;
    percent = Math.floor(result);

}

/*function score() {
    if (percent >= 0) {
        alert("Your win percent is" + percent + "%");
    } else {
        alert("Play the game to see your score!")
    }
}*/