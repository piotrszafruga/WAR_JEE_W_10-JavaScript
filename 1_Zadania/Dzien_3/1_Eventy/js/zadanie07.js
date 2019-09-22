document.addEventListener("DOMContentLoaded", function(){
    var box = document.querySelector("div");
    var globalX = document.querySelector("#globalX");
    var globalY = document.querySelector("#globalY");
    var localX = document.querySelector("#localX");
    var localY = document.querySelector("#localY");

    box.addEventListener("mousemove", function(e) {
        globalX.innerText = e.screenX;
        globalY.innerText = e.screenY;
        localX.innerText = e.clientX;
        localY.innerText = e.clientY;

    });
});
