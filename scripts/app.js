const targetNumber = _.random(130, 250);
let points = 0;
let strikes = 0;
let clicks = 0;

$("#red-gem").attr("value", _.random(3, 6))
$("#blue-gem").attr("value", _.random(15, 20))
$("#green-gem").attr("value", _.random(7, 12))
$("#yellow-gem").attr("value", 1) 

$("#target-number").append(targetNumber)

function reset(){
    $("#reset").on("click", function(event){
        event.preventDefault()
        location.reload()
    })
}

$(document).ready(function () {
    $("img").on("click", function (event) {
        event.preventDefault()
        clicks++
        const gemValue = parseInt($(this).attr("value"))
        $("#points").empty().append(points += gemValue)
        if(points > targetNumber){
            strikes++
            points = 0
        }
        if(strikes === 3){
            $("#random-number, #strikes, #gems, #points").css("filter","blur(5px)")
            $("#strikes").css("display","none")
            $("#modal").fadeIn(500).css("display","block")
            $("#modal-head").append("You Lose!")
            $("#modal-content").append(
                "<p class='score-head'>" + "<strong>" +"Clicks:  "+ "</strong>" + clicks + "</p>" + "<br>" +
                "<p class='score-head'>" + "<strong>" +"Strikes:  "+ "</strong>" + strikes + "</p>"
                )
                reset()
        }
        if(points === targetNumber){
            $("#random-number, #strikes, #gems, #points").css("filter","blur(5px)")
            $("#strikes").css("display","none")
            $("#modal").fadeIn(500).css("display","block")
            $("#modal-head").append("You Win!")
            $("#modal-content").append(
                "<p class='score-head'>" + "<strong>" +"Clicks:  "+ "</strong>" + clicks + "</p>" + "<br>" +
                "<p class='score-head'>" + "<strong>" +"Strikes:  "+ "</strong>" + strikes + "</p>"
                )
                reset()
        }
        $("#strikes").empty().append("<h1>"+ strikes +"</h1>")
    });
});