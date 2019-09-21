
document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zad 1.
    console.log("Zad 1:");
    var zad1 = document.querySelector("body > div.exercise.ex1");

    var sel11 = zad1.querySelectorAll("li:not([data-direction])");
    //var sel11 = zad1.getElementsByTagName("li:not([data-direction])");
    for (var i = 0; i < sel11.length; i++) {
        sel11[i].dataset.direction = "up";
    }

    var sel12 = zad1.querySelectorAll("li[data-direction]");
    for (var i = 0; i < sel12.length; i++) {
        if (i%2 === 1) {
            sel12[i].style.backgroundColor = "green";
        }
    }

    var sel12 = zad1.querySelectorAll("li");
    sel12[4].classList.add("big");

    //Zad 2.
    console.log("Zad 2:");
    var sel21 = document.querySelector("body > div.exercise.ex2")
    var opinions = sel21.querySelectorAll("option");

    for(var i = 0; i < opinions.length; i++) {
        var year = opinions[i].value; //getAttribute("value");
        opinions[i].innerHTML = year;
        opinions[i].dataset.year = Number.parseInt(year) + 20;
    }

    //Zad 3.
    console.log("Zad 3:");
    var sel31 = document.querySelectorAll("body > div.exercise.ex3 > div");

    var chrome = sel31[0].getElementsByClassName("chrome");
    chrome[0].style.width = "100px";

    var edge = document.querySelector(".ex3 .edge");
    edge.style.backgroundImage = "url('./assets/img/edge.png')";

    var edge = document.querySelector(".ex3 .firefox");
    edge.style.backgroundImage = "url('./assets/img/firefox.png')";


    for(var i = 0; i < sel31.length; i++) {
        var cls = sel31[i].getElementsByTagName("div");
        console.log("___");
        console.log(cls[0]);
        console.log(cls[0].className);

        if (cls[0].className === "edge") {
            var link = sel31[i].getElementsByTagName("a");
            console.log(link[0]);
            link[0].setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
        } else if (cls[0].className == "firefox") {
            var link = sel31[i].getElementsByTagName("a");
            link[0].setAttribute("href", "https://www.mozilla.org/pl/firefox/");
            link[0].innerHTML = "Firefox";
        }
    }

    //Zad 4.
    console.log("Zad 4:")
    var uls = document.querySelectorAll("body > div.exercise.ex4 > ul");
    var ex4 = document.querySelector("body > .exercise.ex4");

    var name = document.getElementById("name");
    name.innerText = "Piotr M Szafruga";
    var name = ex4.querySelector("#fav_color");
    name.innerText = "niebieski";
    var name = ex4.querySelector("#fav_meal");
    name.innerText = "dhal";

    //Zad 5.
    console.log("Zad 5:");
    var ul = document.querySelector("body > div.exercise.ex5 > ul");
    ul.classList.add("menu");

    var ils = ul.children;
    for(var i = 0; i < ils.length; i++) {
        ils[i].classList.add("menuElement");
        ils[i].classList.remove("error");
    }

    //Zad 6.
    console.log("Zad 6:");
    var ul = document.querySelector("body > div.exercise.ex6 > ul");
    var ils = ul.children;

    // //1. version:
    for(var i = 0; i < ils.length; i++) {
        ils[i].dataset.id = i + 1;
        console.log(ils[i].dataset);
    }

    //2. version:
    for(var i = 0; i < ils.length; i++) {
        ils[i].setAttribute("data-id", (i + 50).toString());
        console.log(ils[i].dataset);
    }





});
