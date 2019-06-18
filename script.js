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


/*
    var svg = document.getElementById("cups");
    var s = Snap(svg);

    var simpleCup = Snap.select('#simple-cup');
    var fancyCup = Snap.select('#fancy-cup');

    var simpleCupPoints = simpleCup.node.getAttribute('d');
    var fancyCupPoints = fancyCup.node.getAttribute('d');

    var toFancy = function(){
      simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);
    }

    var toSimple = function(){
      simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy);
    }

    toSimple();*/
});
