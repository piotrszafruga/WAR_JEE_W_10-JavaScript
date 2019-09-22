function move() {
    console.log(this);

    var il = this.parentElement;
    var copy = il.cloneNode(true);
    var ul = il.parentElement;

    if (ul.id === "list1") {
        var newUl = document.querySelector("#list2");
    } else {
        var newUl = document.querySelector("#list1");
    }

    // Remove from list
    ul.removeChild(il);

    //Add to other list
    newUl.append(copy);

    // Establish the event it the copy
    var buttonCopy = copy.querySelector(".moveBtn");
    buttonCopy.addEventListener('click', move);
}

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".moveBtn");
    console.log(buttons[0]);

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", move);
    }

});