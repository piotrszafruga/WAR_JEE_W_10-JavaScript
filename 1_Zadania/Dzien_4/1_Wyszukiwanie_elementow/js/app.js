$(document).ready(function(){
    $("section.main li").addClass("borderClass");
    $(".showMore").first().css("color", "red");

    $('section.main').find('li').addClass('colorText backgroundElement');

    $('section.main').find('li').fadeOut('slow').fadeIn('slow');

    // $('a').css('color','red');

    // $('.menu').find('a').css('color','red');

    $('.menu').find('a').addClass('redLinks');

    $('.menu').find('a').eq(0).addClass('bigFont');

    if ($('h1').hasClass('creepyHeader')) {
        $('h1').addClass('creepyHeader');
    } else {
        console.log('Nagłówek ma już klasę creepyHeader.');
    }
});