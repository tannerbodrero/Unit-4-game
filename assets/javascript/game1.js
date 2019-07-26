// Listing out global variables.
var winningscore = 0;
var wins = 0;
var losses = 0;
var red = 0;
var purple = 0;
var green = 0;
var blue = 0;
var userscore = 0;

// A function to set the random value of the winning score.
function createRandomScore() {
return winningscore = Math.floor(Math.random()*102) + 19;
}
    
// A function to set the random value of the 4 crystals.
function createCrystalScore(){
    var randomCrystals = [1,2,3,4,5,6,7,8,9,10,11,12];
    var newArray = [];
    for (var i = 0; i < 4; i++){
        var number = randomCrystals.splice(randomCrystals[Math.floor(Math.random()*12)], 1);
            newArray.push(number);
    }
    return newArray;
}

// A function to set the conditions for winning and losing the game. They also set the conditions to reset the scores in case of winning or losing.
function actualScores(){
   if (userscore === winningscore){
       wins = wins + 1;
    }
   if (userscore > winningscore){
       losses = losses + 1;
    }
   if (userscore === winningscore || userscore > winningscore){
       userscore = userscore - userscore;
       winningscore = createRandomScore();
       crystals = createCrystalScore();
       red = crystals[0]
       purple = crystals[1];
       green = crystals[2];
       blue = crystals[3];
    }
}

// A function to take the value of the variables and turn them into text to be displayed.
function updateScores(){
   actualScores();
   $("#winning-score").text(winningscore);
   $("#user-score").text(userscore);
   $("#wins").text("Wins: " + wins);
   $("#losses").text("Losses: " + losses);
}

// A function to start the game. We set the random winning score and crystal values.
function startGame(){
   winningscore = createRandomScore();
   crystals = createCrystalScore()
   red = crystals[0]
   purple = crystals[1]
   green = crystals[2]
   blue = crystals[3]
   
   updateScores();
}
startGame();

// Listing out the increase of user score with clicking each crystal.
$("#red").on("click", function(){
   userscore = +userscore + +red;
   updateScores();
})
$("#purple").on("click", function(){
   userscore = +userscore + +purple;
   updateScores();
})
$("#green").on("click", function(){
   userscore = +userscore + +green;
   updateScores();
})
$("#blue").on("click", function(){
   userscore = +userscore + +blue;
   updateScores();
})