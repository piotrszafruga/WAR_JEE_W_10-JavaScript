
function getDataInfo(element) {
    var table = [];
    var ils = element.children;

    for (var i = 0; i < ils.length; i++) {
        table[i] = ils[i].dataset.info;
    }

    return table;
}

function getElementClass(element) {
    var table= [];
    return element.classList;

}

function getElementText(element) {
    return element[0].innerText;
}

function getElementAlt(element) {
    var table = [];

    for (var i = 0; i < element.length; i++) {
        table[i] = element[i].getAttribute("alt");
    }

    return table;
}

function getElementHref(element) {
    var table = [];

    for (var i = 0; i < element.length; i++) {
        table[i] = element[i].getAttribute("href");;
    }

    return table;
}

document.addEventListener("DOMContentLoaded", function() {

    //Zad 1.
    var menu = document.getElementById("menu");
    getDataInfo(menu);
    console.log(menu);
    console.log(getDataInfo(menu));

    //Zad 2.
    var mainContener = document.getElementById("main-contener");
    getElementClass(mainContener);

    //Zad 3.
    var pinkColor = document.getElementsByClassName("pink-color");
    console.log(getElementText(pinkColor));

    //Zad 4.
    var images = document.getElementsByClassName("images");
    console.log(getElementAlt(images));

    //Zad 5.
    var links = document.getElementsByClassName("my-link");
    console.log(links[0]);
    console.log(getElementHref(links));

});
