document.addEventListener("DOMContentLoaded", function() {
    var checkboxes = document.querySelectorAll(".checkbox");
    var additions = document.querySelectorAll("input[data-price]");
    var checkAll = checkboxes[0].children[0].children[0];
    var clearAll = checkboxes[checkboxes.length - 1].children[0].children[0];
    var sum = 0;

    for (var i = 0; i < additions.length; i++) {

        additions[i].addEventListener("change" , function() {
            if (this.hasAttribute("data-price")) {
                if (this.checked) {
                    sum += Math.floor(this.dataset.price * 10);
                } else {
                    sum -= Math.floor(this.dataset.price * 10);
                }
            }
            console.log(sum);
        });

    }

    checkAll.addEventListener("change", function() {
        sum = 0;
        for (var i = 0; i < additions.length; i++) {
            additions[i].checked = true;
            sum += Math.floor(additions[i].dataset.price * 10);
        }
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

});