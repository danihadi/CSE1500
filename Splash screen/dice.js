
var dice = {
   roll: function () {
        var number = Math.floor(Math.random() * 6) + 1;
        return number;
        }   
    }

var button = document.getElementById("click");

button.onclick = function(){
    var result = dice.roll();
    print(result);
}

function print(number){
    var result = document.getElementById('die');
    result.innerHTML = '<img src="die' + number + '.jpg">';
    move(number);
}

const players = [{
    name: "Player1",
    position: 1,
    color: "gold",
},{
    name: "Player2",
    position: 1,
    color: "blue",
}]

let currentPlayerPosition = 1;
function move(number){
    var previousPosition = document.getElementById(currentPlayerPosition);
    currentPlayerPosition += number;
    console.log("Moved to" +  currentPlayerPosition);
    var position = document.getElementById(currentPlayerPosition);
    position.innerHTML = '<img class="pion" src="player.jpg">';
    previousPosition.innerHTML = ;
}

