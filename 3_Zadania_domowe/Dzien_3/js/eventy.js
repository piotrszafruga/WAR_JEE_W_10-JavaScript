document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a');

    links[0].addEventListener('click', function () {
        this.nextElementSibling.style.display = 'block';
    })

    links[1].addEventListener('mouseover', function () {
        this.nextElementSibling.style.display = 'block';
    })

});
