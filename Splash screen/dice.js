
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


let currentPlayerPosition = 1;
let playerTurn = 1;
let turn = 0;

const players = [{
    name: "Player 1",
    position: 1,
},{
    name: "Player 2",
    position: 1,
},{
    name: "Player 3",
    position: 1,
},{
    name: "Player 4",
    position: 1,
}];


function move(number){  
        var previousposition = document.getElementById(players[turn].position + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(players[turn].position + number + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = players[turn].position + number;
        console.log("Moved to" +  players[turn].position);
        if (playerTurn != 4) {
           playerTurn = playerTurn + 1;
            turn = turn + 1;
        } else {
            playerTurn = 1;
            turn = 0;
        }
}



