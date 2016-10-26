$(document).ready(function() {
    //Backup styles for browsers with JavaScript disabled
    $('figure').removeClass('jsOff');
    $('img').removeClass('jsOff');
    //Load hours of operation for the day into index.html
    $('#ops-trigger').openStatus({
        sunday: ' 2:30pm until 9',
        monday: 'again Tuesday at 5pm',
        tuesday: ' 5pm until 10',
        wednesday: ' 5pm until 10',
        thursday: ' 5pm until 10',
        friday: ' 5pm until 10',
        saturday: ' 5pm until 10'
    });
});

//Mobile nav trigger

$('#menu').on('click', function() {
    $('#mobileNav').toggleClass('hide');
    $('#menu').toggleClass('spin');
});


//Lazy load imgs 200 px before entering the viewport
$("img").unveil(200, function() {
    $(this).load(function() {
        //Exposure effect fading polaroid imgs in
        this.style.opacity = 1;
    });
});



//sticky menu at the top the top after scrolling 100px in desktop view 
$(window).scroll(function() {
    $("#navMenu").css("top", Math.max(-12, 100 - $(this).scrollTop()));
});
