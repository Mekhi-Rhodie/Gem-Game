const targetNumber = _.random(130, 250);
let points = 0;
let rounds = 3;
let strikes = 3;

$("#red-gem").attr("value", _.random(1, 5))
$("#blue-gem").attr("value", _.random(10, 20))
$("#green-gem").attr("value", _.random(5, 10))
$("#yellow-gem").attr("value", _.random(1, 25))

$("#target-number").append(targetNumber)

$(document).ready(function () {
    $("img").on("click", function (event) {
        event.preventDefault()
        const gemValue = parseInt($(this).attr("value"))
        $("#points").empty().append(points += gemValue)
    });
});


