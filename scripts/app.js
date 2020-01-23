const targetNumber = _.random(130, 250);
let points = 0;
let rounds = 3;
let strikes = 0;
let score = 0;
let clicks = 0;

$("#red-gem").attr("value", _.random(3, 6))
$("#blue-gem").attr("value", _.random(15, 20))
$("#green-gem").attr("value", _.random(7, 12))
$("#yellow-gem").attr("value", _.random(1, 2)) 

$("#target-number").append(targetNumber)

$(document).ready(function () {
    $("img").on("click", function (event) {
        event.preventDefault()
        clicks++
        const gemValue = parseInt($(this).attr("value"))
        $("#points").empty().append(points += gemValue)
        if(points === targetNumber){
            $("#container").css("opacity",".30")
            $("#win-modal").slideDown(1300).css("display","block")
            $(".modal-content").append(
                "<p class='score-head'>" + "<strong>" +"Clicks:  "+ "</strong>" + clicks + "</p>" + "<br>" +
                "<p class='score-head'>" + "<strong>" +"Strikes:  "+ "</strong>" + strikes + "</p>"
                )
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