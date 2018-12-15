
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
        var currentposition = document.getElementById(players[turn].position + number + "p" + playerTurn);
        players[turn].position = players[turn].position + number;
        win(players[turn].position);
        moveLoop(previousposition, players[turn].position, number, playerTurn);
        snakesLadders(players[turn].position, number);
        i = 1;
}

function snakesLadders(number, moves){
    setTimeout(function(){
    if(number == 4){
    var previousposition = document.getElementById(4 + "p" + playerTurn);
    previousposition.style.visibility ="hidden";
    var currentposition = document.getElementById(37 + "p" + playerTurn);
    currentposition.style.visibility = "visible";
    players[turn].position = 37;
    }
    if(number == 10){
        var previousposition = document.getElementById(10 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(28 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 28;
    }
    if(number == 14){
        var previousposition = document.getElementById(14 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(35 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 35;
    }
    if(number == 20){
        var previousposition = document.getElementById(20 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(43 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 43;
    }
    if(number == 23){
        var previousposition = document.getElementById(23 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(40 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 40;
    }
    if(number == 26){
        var previousposition = document.getElementById(26 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(62 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 62;
    }
    if(number == 33){
        var previousposition = document.getElementById(33 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(47 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 47;
    }
    if(number == 41){
        var previousposition = document.getElementById(41 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(58 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 58;
    }
    if(number == 9){
        var previousposition = document.getElementById(9 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(8 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 8;
    }
    if(number == 25){
        var previousposition = document.getElementById(25 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(5 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 5;
    }
    if(number == 32){
        var previousposition = document.getElementById(32 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(3 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 3;
    }
    if(number == 44){
        var previousposition = document.getElementById(44 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(30 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 30;
    }
    if(number == 51){
        var previousposition = document.getElementById(51 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(21 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 21;
    }
    if(number == 53){
        var previousposition = document.getElementById(53 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(38 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 38;
    }
    if(number == 57){
        var previousposition = document.getElementById(57 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(42 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 42;
    }
    if(number == 63){
        var previousposition = document.getElementById(63 + "p" + playerTurn);
        previousposition.style.visibility ="hidden";
        var currentposition = document.getElementById(2 + "p" + playerTurn);
        currentposition.style.visibility = "visible";
        players[turn].position = 2;
    }
    var oldname = document.getElementById("player" + playerTurn);
    if (playerTurn != 4) {
        playerTurn = playerTurn + 1;
         turn = turn + 1;
     } else {
         playerTurn = 1;
         turn = 0;
     }
        var newname = document.getElementById("player" + playerTurn);
        oldname.style.visibility = "hidden";
        newname.style.visibility = "visible";
    }, moves*250 + 100)
};

function win(number){
    if(number >= 64){
        alert("Congratulations " + players[turn].name + " won!");
        window.location = 'splash.html';
    }
}

var i = 0;

function moveLoop(previousposition, playersposition, number, turns){
    setTimeout(function(){
        previousposition.style.visibility = "hidden";
        var nextposition = document.getElementById(playersposition - number + i + "p" + turns);
        nextposition.style.visibility = "visible";
        previousposition = document.getElementById(playersposition - number + i + "p" + turns);
        i++;
        if(i < number + 1){
            moveLoop(previousposition, playersposition, number, turns);
        }
    }, 250)
}
