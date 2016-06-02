$(document).ready(function() {
    // declare variable that will hold value from user
    var city = "city";

    // execute when user presses enter or clicks the "UPDATE" button
    $("#target").submit(function(event) {
        // clear previous backgrounds
        $("body").removeAttr("background");
        $("body").attr("class", "");

        // get value, trim spaces, and convert it to uppercase so that we can get the correct value if the user types in lowercase or uppercase
        city = $("#city-type").val().trim().toUpperCase();

        // add class according to the value
        if (city == "NYC" || city == "NEW YORK" || city == "NEW YORK CITY") {
            $("body").addClass("nyc");
        } else if (city == "SAN FRANCISCO" || city == "SF" || city == "BAY AREA") {
            $("body").addClass("sf");
        } else if (city == "LOS ANGELES" || city == "LA" || city == "LAX") {
            $("body").addClass("la");
        } else if (city == "AUSTIN" || city == "ATX") {
            $("body").addClass("austin");
        } else if (city == "SYDNEY" || city == "SYD") {
            $("body").addClass("sydney");
        }

        // clear form input and prevent form element default
        $("#city-type").val("");
        event.preventDefault();
    });
});
