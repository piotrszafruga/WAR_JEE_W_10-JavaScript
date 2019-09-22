document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelector("a");
    buttons.addEventListener("click", function () {
        var ul = document.querySelector(".menu");
        var previous = ul.querySelectorAll("li").length;
        var current = previous + 1;
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Element " + current + " - w chwili dodania było " + previous +  " elementów"));
        ul.appendChild(li);
    });
});