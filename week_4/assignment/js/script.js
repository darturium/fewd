$(document).ready(function() {
    $("a").click(function(event) {
        //event.preventDefault();
        console.log(event);
    });

    $(".readmore").click(function() {
        $("#show-this-on-click").slideDown();
        $(".readmore").hide();
        $(".readless").show();
    });

    $(".readless").click(function() {
        $(".readless").hide();
        $("#show-this-on-click").slideUp();
        $(".readmore").show();
    });

    $(".learnmore").click(function() {
        $("#learnmoretext").slideDown();
        $(".learnmore").hide();
    });

});
