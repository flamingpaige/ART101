function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("Yippee! You guessed it :D");
    }
    else {
        $("#output").html("*loud incorrect buzzer sound* WRO000NG!");
    }
}

$("#good-button").click(function () {
    askNumber(2);
});