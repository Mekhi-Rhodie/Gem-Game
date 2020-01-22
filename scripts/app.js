const targetNumber = _.random(130, 250);
let points = 0;
let rounds = 3;
let strikes = 0;
let score = 0;

$("#red-gem").attr("value", _.random(2, 5))
$("#blue-gem").attr("value", _.random(10, 20))
$("#green-gem").attr("value", _.random(5, 10))
$("#yellow-gem").attr("value", 1) 

$("#target-number").append(targetNumber)

$(document).ready(function () {
    $("img").on("click", function (event) {
        event.preventDefault()
        const gemValue = parseInt($(this).attr("value"))
        $("#points").empty().append(points += gemValue)
        if(points === targetNumber){
            alert("You Won!")
            location.reload()
        }else if(points > targetNumber){
            console.log("You Lose!!!!!")
            strikes++
            points = 0
            console.log(strikes)
        }
        if(strikes === 3){
            alert("GAME OVER!!!")
            location.reload()
        }
        $("#strikes").empty().append("<h1>"+ strikes +"</h1>")
    });
});


