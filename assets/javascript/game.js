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