$(document).ready(function() {

    //Zad 1.
    var people = $(".people");
    var dodaj = $(people).find("input[type='submit']");

    $(dodaj).on('click', function() {
        var imie = $("#addUser").val();
        var wiek = $("#age").val();

        var row = $("<li>");
        $(row).text(imie);
        $(row).attr("data-age", wiek);

        if ( wiek <= 15 ) {
            $(row).css("backgroundColor", "green");
        }
        else if((wiek >= 16) && (wiek <= 40)){
            $(row).css("backgroundColor", "blue");
        }
        else if(wiek >= 40){
            $(row).css("backgroundColor", "brown");
        }

        $(".main").children().last().after(row);
    });

    //Zad 2.
    var sec = $('.where-i-am');

    var ff = $(function() {
        sec.find('div').before($('<span>Jestem tutaj</span>'));
        sec.find('p').before($('<span>Jestem tutaj</span>'));
        sec.find('div').after($('<span>Jestem tutaj</span>'));
        sec.find('p').after($('<span>Jestem tutaj</span>'));
    });

    ff;


});