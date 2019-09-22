document.addEventListener("DOMContentLoaded", function() {
    var cardTypeInput = document.getElementById("card");
    var validation = document.getElementById("validation");
    var type = document.getElementById("type");
    cardTypeInput.addEventListener("keyup", function () {
        var value = cardTypeInput.value;
        if(isVisa(value)){
            type.innerHTML = "Visa";
            validateCard("Visa", value)
        }
        else if(isMastercard(value)){
            type.innerHTML = "Mastercard";
            validateCard("Mastercard", value)
        }
        else if(isAmericanExpress(value)){
            type.innerHTML = "American Express";
            validateCard("American Express", value)
        }
        else{
            type.innerHTML = "";
        }
    });
});

function isVisa(value){
    return value.charAt(0) === "4";
}

function isMastercard(value){
    return value.charAt(0) === "5";
}

function isAmericanExpress(value){
    return value.charAt(0) === "3" &&
        (value.charAt(1) === "4" || value.charAt(1) === "7");
}

function isVisaValid(value){
    return value.length >= 13 && value.length <= 16;
}

function isMastercardValid(value){
    return value.length == 16;
}

function isAmericanExpressValid(value){
    return value.length == 15;
}

function validateCard(type, value){
    if(type === "Visa"){
        validation.innerHTML= "Card Invalid";
        if(isVisaValid(value)){
            validation.innerHTML= "Card Valid";
        }
    }
    else if(type === "Mastercard"){
        validation.innerHTML= "Card Invalid";
        if(isMastercardValid(value)){
            validation.innerHTML= "Card Valid";
        }
    }
    else if(type === "American Express"){
        validation.innerHTML= "Card Invalid";
        if(isAmericanExpressValid(value)){
            validation.innerHTML= "Card Valid";
        }
    }
}