$(function () {
    "use strict";
    
    function updateOutput() {
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>")
        
        document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val())
    }
    
    $(".toggleButton").mouseenter(function () {
        $(this).addClass("highlight")
    })
    $(".toggleButton").mouseleave(function () {
        $(this).removeClass("highlight")
    })
    $(".toggleButton").click(function () {
        $(this).toggleClass("active");
        var panelId = $(this).attr("id") + "Panel";
        $("#" + panelId).toggleClass("hidden");
        var tapsActive = 4 - $(".hidden").length
        $(".panel").width($(window).width() / tapsActive)
    })
    $(".panel").width($(window).width() / 2 - 3)
    $(".panel").height($(window).height() - $("#header").height() - 6)
    
    updateOutput();
    $("textarea").on("change keyup paste", function () {
        updateOutput()
    })
    
})