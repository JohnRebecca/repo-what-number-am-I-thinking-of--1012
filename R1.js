function storeUserData() {
    var name = prompt("Please enter your name with 3 numbers and 2 special characters: ");
    var arrayNames = [];
    arrayNames.push(name);
    if (arrayNames.has(name)) {
        document.getElementById("output").innerHTML = "Your username is already in use please enter another name";
        arrayNames.delete(name);
    }


}

function randomGenerator() {
    var c = parseInt(prompt("Please enter the number of tries you wish to have from 1-20 "));
    if (c > 20 || c < 0) {
        document.getElementById("output").innerHTML = "Your input is not between 0 and 20, please enter a valid input";
    }
    a = Math.floor(Math.random() * 101);
    for (i = 0; i <= c; i = i + 1) {
        var num = parseInt(prompt("Please enter positive interger between 0-100 : "));
        if (num > 100 || num < 0) {
            document.getElementById("output").innerHTML = "Your input is not between 0 and 100, please enter a valid input";
        }
        if (a == num) {
            document.getElementById("output").innerHTML = "you guessed it!!";
        } else {
            document.getElementById("output").innerHTML = "try again";
        }
    }

}