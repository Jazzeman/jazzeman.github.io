$(document).ready(function(){    
    
    $('.my-paroller').paroller();
    
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 5) {
            $(".valikko").addClass("scrolled");
        } else {
            $(".valikko").removeClass("scrolled");
        }

        $("#infobutton").removeClass("button_open");
        $("#infobutton2").removeClass("button_open");
        $("#info").slideUp();
        $("#info2").slideUp();
    });
    
    
    $("#infobutton").mouseover(function () {
        $("#infobutton").addClass("button_open");
        $("#info").stop().slideDown();
        $("#infobutton2").removeClass("button_open");
        $("#info2").stop().slideUp();
    });
    /*$("#info").mouseleave(function () {
        $("#infobutton").removeClass("button_open");
        $("#info").slideUp();
    });*/

    $("#infobutton2").mouseover(function () {
        $("#infobutton2").addClass("button_open");
        $("#info2").stop().slideDown();
        $("#infobutton").removeClass("button_open");
        $("#info").stop().slideUp();
    });
    /*$("#info2").mouseleave(function () {
        $("#infobutton2").removeClass("button_open");
        $("#info2").slideUp();
    });*/

    $("nav").mouseover(function (event) {
        event.stopPropagation();
    });

    $(window).mouseover(function () {
        $("#infobutton").removeClass("button_open");
        $("#infobutton2").removeClass("button_open");
        $("#info").slideUp();
        $("#info2").slideUp();
    });
});