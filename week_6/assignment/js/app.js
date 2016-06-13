$("document").ready(function() {

    //create an array with the cities' values
    var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

    // create variable to hold the value that is selected by user
    var selection;

    // populate the select element with the cities values by appending an <option> element
    // for each city
    for (var i = 0; i < cities.length; i++) {
        $("#city-type").append("<option value='" + cities[i] + "'>" + cities[i] + "</option>");
    }

    // Now that the list is populated, peform an action when the select element is changed
    $("#city-type").change(function(event) {
        // Get the value that was selected and assign it to the selection variable
        selection = $("#city-type").val();

        // reset any previous classes on the body element
        $("body").attr("class", "");

        // add a class to the body depending on the selection value
        if (selection == "NYC") {
            $("body").addClass("nyc");
        } else if (selection == "SF") {
            $("body").addClass("sf");
        } else if (selection == "LA") {
            $("body").addClass("la");
        } else if (selection == "ATX") {
            $("body").addClass("austin");
        } else if (selection == "SYD") {
            $("body").addClass("sydney");
        }
    });
});
