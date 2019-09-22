document.addEventListener("DOMContentLoaded", function() {
    var buttonsDiv = document.querySelector("#bubblingButtons");
    buttonsDiv.addEventListener("click", function () {
        var buttons = document.querySelectorAll("button");
        for(var i = 0 ; i < buttons.length; i++){
            buttons[i].dataset.counter = parseInt(buttons[i].dataset.counter) + 1;
        }
    });
});