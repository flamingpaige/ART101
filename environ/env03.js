let environmentTitle = "It Bill";

let environmentElements = ["bill", "pillow", "bucket", "the walls"];

let mainEntity = {
    name: "Bill",
    type: "soft border",
    mood: "terrifying",
}

    pillowCreature = {
    name: "pillow",
    type: "used",
    mood: "waiting",
    };

$("#pillow").click(function () {
    
    let message = "<p>I'm so cold...please rest your head on me?" +
    "<p>My name and occupation are " + pillowCreature.name + ".</p>" +
    "<p>I'm super old and " + pillowCreature.type + ".</p>" +
    "<p>I'm always here... " + pillowCreature.mood + ".</p>";

    $("#bucket").click(function () {
    
    let message = "<p>The name's bucket." +
    "<p>There's some weird liquid in here wanna come check it out? " ;
    }
    
    $("#environment-output").html(message);


})
