//Task1.
function boilEgg(milliseconds){
    var interval = setInterval(function () {
        console.log('Jajko sie gotuje');
    }, 2000);

    var timeout = setTimeout(function () {
        console.log('Jajko ugotowane');
        clearTimeout(timeout);
        clearInterval(interval);
    }, milliseconds);
}
// boilEgg(10000);

//Task4.
function sorting() {
    var num = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (num<arguments[i]) {
            num = arguments[i];
        }
    }
    return num;
}

// console.log(sorting(5, 29, 6, 4, 34, 56, 2, 3));

