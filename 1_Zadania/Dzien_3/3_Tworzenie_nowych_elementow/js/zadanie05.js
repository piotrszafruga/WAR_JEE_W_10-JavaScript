document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".deleteBtn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var row = this.parentElement.parentElement;
            row.parentElement.removeChild(row);
        });
    }
});