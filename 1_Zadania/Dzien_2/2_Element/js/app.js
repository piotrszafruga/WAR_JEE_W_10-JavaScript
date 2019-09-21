/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".offers").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zad 1:
    var tempId = homeElement.id
    homeElement.id = homeElement.className;
    homeElement.className = tempId;

    //Zad 2.
    console.log("Child elements of offers:");
    for(var i = 0; i < childElements.length; i++){
        console.log(childElements[i] + ' typ: ' + typeof childElements[i]);
    }
    console.log("Banner:");
    console.log(banner + ' type: ' + typeof banner);

    console.log("Blocks:");
    for(var i = 0; i < blocks.length; i++){
        console.log(blocks.item(i).innerHTML + ' typ: ' + blocks.item(i).outerHTML);
    }

    console.log("Links:");
    for(var i = 0; i < links.length; i++){
        console.log(links.item(i) + ' typ: ' + typeof links.item(i));
    }

    console.log("Link datasets:");
    for (var i = 0; i < links.length; i++) {
        var item = links.item(i).dataset;
        console.log(item + ' typ: ' + typeof item)
    }
    // console.log(homeElement);
    // console.log(typeof homeElement);
    // console.log(childElements);
    // console.log(typeof childElements);
    // console.log(banner);
    // console.log(typeof banner);
    // console.log(blocks);
    // console.log(typeof blocks);
    // console.log(links);
    // console.log(typeof links);


    //Zad 3.
    console.log("Zad 3:");
    console.log(blocks[0].innerHTML);
    console.log(blocks[0].outerHTML);

    console.log(blocks[0].innerHTML);
    blocks[0].innerHTML = "Nowa wartość diva o klasie blocks";
    console.log(blocks[0].innerHTML);

    //Zad 4.
    console.log("Zad 4:");
    console.log(homeElement.id);

    //Zad 5.
    console.log("Zad 5:");
    for (var i = 0; i < childElements.length; i++) {
        console.log(childElements[i].tagName);
    }

    //Zad 6.
    console.log("Zad 6:");
    for (var i = 0; i < links.length; i++) {
        console.log(links[i].dataset);
    }

    //Zad 7.
    console.log("Zad 7:");
    console.log(banner.classList);
    console.log(typeof banner.classList);
    console.log(banner.className);
    console.log(typeof banner.className);

});
