document.addEventListener("DOMContentLoaded", function(){
    var buttons = document.querySelectorAll("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var counter = this.nextElementSibling.querySelector(".counter");
            counter.innerText = parseInt(counter.innerText) + 1;
        });
    }
});
