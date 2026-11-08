let environmentTitle = "It Bill";

let environmentElements = ["bill", "pillow", "bucket", "the walls"];

let mainEntity = {
    name: "Bill",
    type: "soft border",
    mood: "terrifying",
    isMoving: true,
    favoriteElement: environmentElements[1]

    pillowCreature = {
    name: "pillow",
    type: "used",
    mood: "waiting",
    };

$("pillow").click(function () {
    
    let message = "<p>I'm so cold...please rest your head on me?"
    message = message + "<p>My name and occupation are " + pillowCreature.name + ".</p>";
    message = message + "<p>I'm super old and " + pillowCreature.type + ".</p>";
    message = message + "<p>I'm always here... " + currentMood + ".</p>";
    
    $("#output").html(message);


};