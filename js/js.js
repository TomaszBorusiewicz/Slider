$(document).ready(function () {


    "use strict";

    var slider = document.getElementById("slider");
    var number = Math.floor((Math.random() * 5) + 1);
    var body = document.getElementsByTagName("body");
    var timer1, timer2;
    var arrowLeft, arrowRight;
    arrowLeft = $("#left");
    arrowRight = $("#right");

    function fadeOut() {
        $("#slider").fadeOut(500);
    }

    function changeSlideByArrowLeft() {

        clearTimeout(timer1);
        clearTimeout(timer2);

        number -= 1;
        number -= 1;
        if (number < 0)
            number = 4;
        fadeOut();
        setTimeout(changeSlide, 500);
    }

    function changeSlide() {

        number += 1;
        if (number > 5) {
            number = 1;
        }
        var plik = "<img src=\"img/img" + number + ".jpg\" />";
        $("#slider").html(plik);
        $("#slider").fadeIn(500);
        timer1 = setTimeout(changeSlide, 5000);
        timer2 = setTimeout(fadeOut, 4500);
    }

    function changeSlideByArrowRight() {

        clearTimeout(timer1);
        clearTimeout(timer2);

        fadeOut();
        setTimeout(changeSlide, 500);
    }

    body.onload = changeSlide();
    arrowLeft.click(changeSlideByArrowLeft);
    arrowRight.click(changeSlideByArrowRight);
});
