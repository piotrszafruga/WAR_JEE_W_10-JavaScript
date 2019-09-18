function myEval(a, b, operation) {//definicja funkcji myEval przyjmującej 3 argumenty: a, b, operation
    //Ciało funkcji
    var result = 0;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;
        case '%':
            result = a % b;
            break;
        case '^':
            result = Math.pow(a, b);
            break;
    }
    return result;
}

//w każdej linijce wywoływwana jest funkcja z przekazaniem odpowiednich argumentów, 2 liczb i operacji matematycznej
console.log(" 2 + 4 = " + myEval(2, 4, '+'));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
console.log(" 8 / 2 = " + myEval(8, 2, "/"));
console.log(" 4 8 = " + myEval(4, 8, ""));
console.log(" 10 % 5 = " + myEval(10, 5, "%"));
//poniżej dopisz pozostałe przypadki działań jakie ma obsługiwać funkcja
