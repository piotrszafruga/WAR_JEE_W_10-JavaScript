document.addEventListener("DOMContentLoaded", function() {
    var checkboxes = document.querySelectorAll(".checkbox");
    var additions = document.querySelectorAll("input[data-price]");
    var checkAll = checkboxes[0].children[0].children[0];
    var clearAll = checkboxes[checkboxes.length - 1].children[0].children[0];
    var button = document.querySelector(".btn.btn-primary");
    var sum = 0;

    var price = document.createElement("p");
    button.parentElement.insertBefore(price, button);

    for (var i = 0; i < additions.length; i++) {

        additions[i].addEventListener("change" , function() {
            if (this.hasAttribute("data-price")) {
                if (this.checked) {
                    sum += Math.floor(this.dataset.price * 10);
                } else {
                    sum -= Math.floor(this.dataset.price * 10);
                }
            }
            price.innerText = sum/10 + "0 PLN";
            console.log(sum);
        });

    }

    checkAll.addEventListener("change", function() {
        sum = 0;
        for (var i = 0; i < additions.length; i++) {
            additions[i].checked = true;
            sum += Math.floor(additions[i].dataset.price * 10);
        }
        price.innerText = sum/10 + "0 PLN";
        console.log(sum);
    });

    clearAll.addEventListener("change", function() {
        for (var i = 0; i < additions.length; i++) {
            additions[i].checked = false;
        }
        checkAll.checked = false;
        sum = 0;
        console.log(sum);
    });

    button.addEventListener("click", function (e) {
        alert("Suma do zapłaty: " + sum/10 + "0 PLN")
        e.preventDefault();
    });

});