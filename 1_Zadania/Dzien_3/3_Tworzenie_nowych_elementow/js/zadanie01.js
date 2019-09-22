document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("addBtn");
    button.addEventListener("click", function () {
        var table = document.getElementById("orders");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = document.getElementById("orderId").value;
        cell2.innerHTML = document.getElementById("item").value;
        cell3.innerHTML = document.getElementById("quantity").value;
    });
});