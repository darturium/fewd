$(document).ready(function() {

    var total = 0;

    function appendValue(value) {
        //number = value.toFixed(2);
        $("#entries").append('<tr><td colspan="2">$' + value.toFixed(2) + '</td></tr>');
    }

    function computeTotal(value) {
        total += value;
        $("#total").text("$" + total.toFixed(2));
    }

    $("body").keypress(function(event) {
        // if ENTER is pressed, append value
        if (event.which == 13) {

            // Get input from form and limit to 2 decimal places—this can be done in one step but splitting in 2 for readability
            var input = parseFloat($("#newEntry").val());
            input = Number((input.toFixed(2)));

            appendValue(input);
            computeTotal(input);

            // clear input field and prevent form from reseting
            $("#newEntry").val("");
            event.preventDefault();

        }
    });



});
