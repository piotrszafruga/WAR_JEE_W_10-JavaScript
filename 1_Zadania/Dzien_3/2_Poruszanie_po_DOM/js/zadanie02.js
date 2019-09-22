document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            if (this.nextElementSibling !== null) {
                this.nextElementSibling.classList.toggle("hidden");
            }
        });
    }
});