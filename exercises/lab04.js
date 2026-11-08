let count = 0;
buttonCreature = {
    name: "Creature Craig",
    species: "a mystery...",
    favoriteFood: "the elderly",
    moods: ["wistful", "melancholy", "murderous", "theatrical", "offputting", "picky"]
};
$("#creature-craig").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    
    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>I'm lowkey feeling " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>My species is " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

   console.log(count);
   console.log(arrayPosition);

});