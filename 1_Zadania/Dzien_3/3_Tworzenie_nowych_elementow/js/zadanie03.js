document.addEventListener("DOMContentLoaded", function() {
    var remove = document.querySelector("#remove");

    remove.addEventListener("click", function(e) {
        remove.parentElement.removeChild(remove);
    });
});