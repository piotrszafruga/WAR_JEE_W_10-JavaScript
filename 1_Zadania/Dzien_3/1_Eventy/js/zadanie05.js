document.addEventListener("DOMContentLoaded", function(){
    var buttons = document.querySelectorAll("button");
    var counter = document.querySelector(".counter");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(e) {
            counter.innerText = parseInt(counter.innerText) + 1;
        });
    }
});
