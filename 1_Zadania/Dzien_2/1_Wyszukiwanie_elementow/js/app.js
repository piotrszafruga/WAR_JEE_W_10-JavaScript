//Co oznaca poniższy kod dowiecie się w dalszej części modułu
document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zad 1.
    var article = document.getElementsByClassName("first");
    var h1elements = article[0].querySelectorAll("h1");

    if (h1elements == null) {
        console.log("Nie ma elementow .h1");
    } else {
        console.log(h1elements.length);
    }

    console.log("offers: ");
    var offers = article[0].getElementsByClassName("offers");
    for (var i = 0; i < offers.length; i++) {
        console.log(offers[i]);
    }

    console.log("divs: ");
    var divs = article[0].querySelectorAll("div");
    for(var i = 0 ; i < divs.length ; i++) {
        console.log(divs[i]);
    }

    //Zad 2.
    console.log("Zad 2.;");
    var znaleziony = document.querySelectorAll("body > nav > ul > li:nth-child(5)");
    console.log(znaleziony[0]);

    //Zad 3.
    console.log("Zad 3.:");
    var sel1 = document.getElementById("home");
    var sel2 = document.querySelector("li:not([data-direction])");
    console.log("li: ");
    console.log(sel2);

    var sel3 = document.getElementsByClassName("block");
    console.log("block: ")
    console.log(sel3[0]);

    //Zad 4.
    var sel40 = document.querySelectorAll("nav");  //"body > nav > ul >li"
    var sel41 = sel40[0].querySelectorAll("li");
    console.log("Zad 4.1:");
    console.log(sel41.length);

    console.log("Zad 4.2:");
    var sel50 = document.querySelectorAll("div");
    var sum = 0;
    for (var i = 0; i<sel50.length; i++) {
        sum+= sel50[i].querySelectorAll("p").length;
    }
    console.log(sum);




});