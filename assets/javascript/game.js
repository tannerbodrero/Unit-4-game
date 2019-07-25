var winningscore = 0;
var wins = 0;
var losses = 0;
var red = 0;
var purple = 0;
var green = 0;
var blue = 0;
var userscore = 0;


//This function sets the random value of the targetscore.
function createRandomScore() {
    var computerOptions = [];
    for (var i = 19; i < 121; i++) {
        computerOptions.push(i)
        }
        return computerOptions[Math.floor(Math.random() * computerOptions.length)]   
    }
    console.log(computerOptions)
    
    
    //This function sets the random value of the 4 crystals.
    var randomJewels = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    function random4(array){
        var newArray = [];
        for (var i = 0; i < 4; i++){
            var number = array.splice(array[Math.floor(Math.random()*12)], 1);
            newArray.push(number);
        }
        return newArray;
    }
    random4(randomJewels);


//This function is the actual begginning of the game. It contains and runs the variables with the updated and require value. So its basically the sequel of the two past functions.
function startGame(){
   winningscore = createRandomScore();
   red = createCrystalScore();
   purple = createCrystalScore();
   green = createCrystalScore();
   blue = createCrystalScore();
   //console.log("The target score is: " + targetscore);
   //console.log("The crystal score are " + redgem, bluegem, yellowgem, greengem);
   updateScores();

}

startGame();


//This function is the one that takes the value of the variables and turns them into html for the user to see.
function updateScores(){
   actualScores();
   $("#winning-score").text(winningscore);
   $("#user-score").text(userscore);
   $("#wins").text("Wins: " + wins);
   $("#losses").text("Losses: " + losses);
   //console.log(userscore);


}


//This function sets the conditions for winning and lossing the game. They also set the conditions to reset the scores in case of winning or lossing.
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
       red = createCrystalScore();
       purple = createCrystalScore();
       green = createCrystalScore();
       blue = createCrystalScore();

   }

   console.log(red, purple, green, blue);

}


// This functions create an event, when the #ids are click the user score changes (ourscore).

$("#red").on("click", function(){
   //console.log("The Red crystal was clicked");
   userscore = userscore + red;
   updateScores();
})

$("#purple").on("click", function(){
   //console.log("The Purple crystal was clicked");
   userscore = userscore + purple;
   updateScores();
})

$("#green").on("click", function(){
   //console.log("The Green crystal was clicked");
   userscore = userscore + green;
   updateScores();
})

$("#blue").on("click", function(){
   //console.log("The Blue Crystal was clicked");
   userscore = userscore + blue;
   updateScores();
})