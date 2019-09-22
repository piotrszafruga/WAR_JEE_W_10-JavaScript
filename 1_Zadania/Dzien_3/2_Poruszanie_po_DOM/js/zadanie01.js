document.addEventListener("DOMContentLoaded", function() {
    var divs = document.querySelectorAll(".listContainer");
    for(var i = 0; i < divs.length; i++){
        divs[i].addEventListener("mouseover", function () {
            this.classList.add("hovered");
            var lis = this.querySelectorAll("li");
            lis[0].style.color = "red";
            lis[1].style.color = "green";
            lis[2].style.color = "green";
            lis[3].style.color = "green";
            lis[4].style.color = "blue";
        });
    }
});