document.addEventListener("DOMContentLoaded", function() {
    var email = document.querySelector("#email");
    var name = document.querySelector("#name");
    var surname = document.querySelector("#surname");
    var pass1 = document.querySelector("#pass1");
    var pass2 = document.querySelector("#pass2");
    var agree = document.querySelector("#agree");
    var but = document.querySelector(".btn.btn-primary");
4
    but.addEventListener("click", function (e) {
        if (email.includes("@")) {
            console.log("@ included");
        }
        console.log('Event wywołany, element #bar');
        e.preventDefault();
    });
});