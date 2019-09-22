document.addEventListener("DOMContentLoaded", function() {
    var invoice = document.querySelector("#invoice");

    invoice.addEventListener("change", function() {
        var invoiceData = document.querySelector("#invoiceData");
        if (this.checked) {
            invoiceData.style.visibility = "visible";
        } else {
            invoiceData.style.visibility = "hidden";
        }

    });

});