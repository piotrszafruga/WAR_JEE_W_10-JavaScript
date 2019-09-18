
function distFromAverage(array) {
    var avg = add(array)/array.length;
    for (var i=0; i<array.length; i++) {
        array[i] = array[i]-avg;
    }
    return array;

}
var ar = [2,3,4,5];
console.log(distFromAverage(ar));