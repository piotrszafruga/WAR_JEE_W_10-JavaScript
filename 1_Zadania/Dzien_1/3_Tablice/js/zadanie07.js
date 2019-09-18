function getMissingElement(array) {
    var start = array[0];
    for (var i=1; i < array.length; i++) {
        if (start+i !== array[i]) {
            return start+i;
        }
    }
    return null;
}

console.log(getMissingElement([1,2,3,4,5,6,7]));// => null
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));// => 9
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));// => -1