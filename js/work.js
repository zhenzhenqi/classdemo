console.log("work.js loaded!!!"); 

$(document).ready(function () {

    //when event a happens to object alpha, kick off event b for object beta
    $('.carousel').carousel({
        interval: 3000
    });

    //when mouse enters lily-test image, make opacity of lily-test h5 go back to 1
    $('#work #portfolio>div>div>img').mouseenter(function () {
        $(this).siblings('h5').animate({
            opacity: '1',
            right: '50px'
        }, {
            duration: 1000
        });
    });
    $('#work #portfolio>div>div>img').mouseleave(function () {
        $(this).siblings('h5').animate({
            opacity: '0',
            right: '0'
        }, {
            duration: 1000
        });
    });

});