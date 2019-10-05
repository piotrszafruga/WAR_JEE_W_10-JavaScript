$(document).ready(function () {

    //Zad 1.
    var task_1 = $(".task_1");
    var button = $(task_1).find("button");

    $(button).on('click', function () {
        var row = $("<div class='panel'>");
        $(task_1).append(row);

        var panel = $(".panel");
        panel.text("dowolny tekst");
        panel.css("font-size", "0");

        panel.on('mouseover', function (event) {
            panel.css("font-size", "50px");
        });
    });


    //Zad 2.
    var people = $(".people");
    var dodaj = $(people).find("input[type='submit']");

    //Przycisk "usuń" dla istniejącyhc elementów:
    $('.main').children().each(function () {
        $(this).html($(this).text() + " <input type='submit' value='usuń'>");
    });

    //Dodawanie elementów:
    $(dodaj).on('click', function () {
        var imie = $("#addUser").val();
        var wiek = $("#age").val();

        var row = $("<li>");
        $(row).html(imie + " <input type='submit' value='usuń'>");
        $(row).attr("data-age", wiek);
        $(".main").children().last().after(row);
    });

    //Event:
    $('.main').on('click', 'input', function () {
        $(this).parent().remove();
    });


});