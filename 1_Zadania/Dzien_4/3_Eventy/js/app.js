$(document).ready(function() {
    // var buttons = $(".hero-buttons").find("button");
    // var button1 = buttons[0];
    // var button2 = buttons[1];
    // var button3 = buttons[2];
    // $(button1).on('click', function() {
    //     console.log("kliknięto mnie");
    // });
    // $(button2).one('click', function() {
    //     console.log("kliknięto mnie, ale już drugi raz nie dam się kliknąć");
    // });
    // $(button3).on('click', function() {
    //     $(buttons).off("click");
    // });


    //Zad2.
    var textarea = $('#textarea');
    textarea.attr('maxlength', 100);
    var count = $('#counter');

    textarea.on('keyup', function() {
        var length = $(this).val().length;

        count.text(length);

        if(length <= 33) {
            textarea.css('color','green');
        } else if (length <= 66) {
            textarea.css('color','yellow');
        } else {
            textarea.css('color','red');
        }
    });

    //Zad 3.
    var shero = $('.superhero-description');
    var dts = shero.find('dt');

    shero.find('dd').css('display','none');

    dts.on('click', function() {
        if ($(this).next().css('display')==='none') {
            $(this).next().slideDown(1000);
        } else {
            $(this).next().slideUp(1000);
        }
    });

    //Zad 4.
    var pass = $('.user-pass');
    var button = $('.show-hide-btn');

    button.on('click', function(e) {

        if (pass.attr('type')==='password') {
            pass.attr('type', 'text');
        } else {
            pass.attr('type', 'password');
        }
        e.preventDefault();
    });

    //Zad 5.
    var menu = $('.menu');

    menu.on('mouseenter', function() {
        console.log('Hura');
    });

    //Zad 6.
    var input = $('.login').find('input');

    input.on('click', function() {
        $(this).css('box-shadow', '0px 0px 8px green');
    });

    input.on('mouseenter', function() {
        $(this).css('background-color', 'white');
    });

    input.on('mouseleave', function() {
        $(this).css('background-color', 'lightGrey');
    });

});

