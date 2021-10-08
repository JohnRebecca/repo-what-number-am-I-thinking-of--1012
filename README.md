# repo-what-number-am-I-thinking-of--1012

EECS 1012: Team Simpletons
 Project: What number am I thinking of?
 
Name: Sharon Sunny
York email: shar0n3@my.yorku.ca
Section B Lab 01
 
Name: Rebecca John
York email: johnreb@my.yorku.ca
Section B lab 1
 
Name: Muhammad Abdullah shahid
York email: clicks@my.yorku.ca
Section B lab 1
 
The game would require the server to choose a number from one to x, and the user would be able to set the number of guesses per count. If the user wishes to give up, they can restart the game again. If the user wins, they will be congratulated by the server, and if they lose, the server will display “You Lose.” This game will also have a win/ lose percent, where the user can see their percentage of winning. The webpage will congratulate the user and display their name (input from the user) on the web page with the other victors.

1. Users will see the website in an HTML format.
2.  We will use HTML, CSS, and Javascript for creating the webpage.
3.  The webpage will welcome the user and request their username, which will lead them to the game.
4.  On the page, they will see three difficulty levels; Easy, Medium, Hard
5.  Easy: the user would guess a number from 1-10; Medium: the user would think of a number from 1-20; Hard: the user would guess a number from 1-20, except they will only have five guesses. 
6.  The user will pick the number of guesses they have but cannot exceed a limit set by the server (maxNum/2)
7.  The user does not get to determine the number of tries, and the server selects the number of attempts (ask TA) 
8.  The program will display a hint if the player’s number is higher or lower than the number decided by the server. 
9.  After the round is finished, the number of guesses it took for the user to identify the correct number will be their score. (Shorter number of guesses, better score)
10.  Once the user is done with the game, the system congratulates them on finishing it in “x” amount of tries. 
11.  The Leaderboard will save based on the username and the array that holds each name to each score
12.  The layout of the Leaderboard:
Rows= top 5 players
Columns(3)=S.No, Username, Score 
