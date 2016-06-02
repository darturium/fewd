$(document).ready(function() {
    var result = 0;

    $("#zero").click(function() {
        result = 0;
        writeResult(result);
    });

    $("#add5").click(function() {
        result = 5 + result;
        writeResult(result);
    });

    $("#add10").click(function() {
        result = 10 + result;
        writeResult(result);
    });

    $("#sub1").click(function() {
        result = result - 1;
        writeResult(result);
    });

    function writeResult(value) {
        $("#result").text(result);
    }
});
