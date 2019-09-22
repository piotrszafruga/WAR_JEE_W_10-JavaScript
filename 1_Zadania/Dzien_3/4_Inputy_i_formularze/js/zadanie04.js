document.addEventListener("DOMContentLoaded", function () {
    var logos = document.querySelectorAll(".page-header > img");
    var choice = document.querySelector(".form-control");
    var button = document.querySelector(".btn.btn-primary");
    var num = 0;


    for (var i = 0; i < 3; i++) {
        choice.addEventListener("click", function() {
            for (var i = 0; i < 3; i++) {
                if (choice[i].selected) {
                    num = i;
                }
            }
            console.log(num);
            logos[0].style.visibility = "visible";
        });
    }

    // button.addEventListener("click", function () {
    //     logos[i].style.visibility = "hidden";
    //     logos[(i + 1)%3].style.visibility = "hidden";
    //     logos[(i + 2)%3].style.visibility = "visible";
    // });

});
