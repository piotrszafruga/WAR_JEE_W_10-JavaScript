document.addEventListener("DOMContentLoaded", function () {
    var logos = document.querySelectorAll(".page-header > img");
    var choice = document.querySelector(".form-control");
    var button = document.querySelector(".btn.btn-primary");
    var num = 0;

    console.log(choice[1]);

    for (var i = 0; i < 3; i++) {
        choice.addEventListener("click", function() {
            for (var i = 0; i < 3; i++) {
                if (choice[i].selected) {
                    num = i;
                }
            }
        });
    }

    button.addEventListener("click", function (e) {
        logos[num].style.visibility = "hidden";
        logos[(num + 1)%3].style.visibility = "hidden";
        logos[(num + 2)%3].style.visibility = "visible";
        e.preventDefault();
    });

});
