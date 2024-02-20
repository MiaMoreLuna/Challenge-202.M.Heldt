//resource link: https://www.w3schools.com/jquery/default.asp

$("#Secret-Text").hide();

$("#toggle-text").click (function()  {
    $("#Secret-Text").toggle();
});

$("#A-box").hide();

$("#toggle-text").click(function() {
    $("#A-box").toggle();

});


    $ ("#My-Name").click (function() {
        $ ("#A-box").css("background-color","pink");

    });


    $("#A-box").click (function() {
        $("#A-box").css ("Width 500px");
    })




