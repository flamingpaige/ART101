
let environmentTitle = "It Bill";

let environmentElements = ["bill", "pillow", "bucket", "the walls"];

let mainEntity = {
    name: "Bill",
    type: "soft border",
    mood: "terrifying",
};

let pillowCreature = {
    name: "pillow",
    type: "used",
    mood: "waiting",
};

// Pillow interaction
$("#pillow").click(function () {

    let message = "<p>I'm so cold...please rest your head on me?</p>" +
    "<p>My name and occupation are " + pillowCreature.name + ".</p>" +
    "<p>I'm super old and " + pillowCreature.type + ".</p>" +
    "<p>I'm always here... " + pillowCreature.mood + ".</p>";

    $("#environment-output").html(message);
});

// Background changer
function changeBackground() {

    if (document.body.style.backgroundImage.includes("backroomsnight.jpg")) {
        document.body.style.backgroundImage = "url('backrooms.png')";
    } else {
        document.body.style.backgroundImage = "url('backroomsnight.jpg')";
    }

}

