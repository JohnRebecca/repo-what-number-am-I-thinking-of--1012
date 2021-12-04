// Team Simpletons, this is made by us and connot be published without our consent
var express = require('express');
var app = express();
app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");

}).listen(3000);
console.log("Server is running!");

function score() {
    if (percent >= 0) {
        alert("Your win percent is " + percent + "%");
    } else {
        alert("Play the game to see your score!")
    }
}