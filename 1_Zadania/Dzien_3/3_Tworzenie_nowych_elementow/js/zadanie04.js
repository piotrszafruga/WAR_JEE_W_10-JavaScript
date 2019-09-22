document.addEventListener("DOMContentLoaded", function() {

    remove.addEventListener("click", function() {
        var ul = this.previousElementSibling;
        var ils = ul.querySelectorAll("li");

        for (var i = 0; i < ils.length; i++) {
            ul.removeChild(ils[i]);
        }
    });

});