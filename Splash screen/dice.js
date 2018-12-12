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
}