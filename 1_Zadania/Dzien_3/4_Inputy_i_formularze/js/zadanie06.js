document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector('.form-group');
    var team1 = document.querySelector('#team1');
    var points1 = document.getElementById('points1');
    var team2 = document.getElementById('team2');
    var points2 = document.getElementById('points2');
    var button = document.querySelector(".btn.btn-primary");

    var table = document.querySelector('.table.table-bordered');

    button.addEventListener('click', function(e) {
        var teams = team1.value != team2.value;

        if (teams && 0 < parseInt(points1.value) && 0 < parseInt(points2.value)) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.innerText = team1.value;
            var td2 = document.createElement('td');
            td2.innerText = team2.value;
            var td3 = document.createElement('td');
            td3.innerText = points1.value + " - " + points2.value;

            table.firstElementChild.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
        }
        e.preventDefault();
    })

});