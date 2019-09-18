function factors(num) {
    var table = [];
    if (num > 0) {
        table.push(num);
        for (var i = Math.floor(num/2); i >= 1; i -= 2) {
            console.log(i);
            if (num % i === 0) {
                    table.push(i);
             }
        }
        table.push(1);
    }
    return table;
}

console.log(factors(2));// => [2, 1]
console.log(factors(54));// => [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(-4));// => []