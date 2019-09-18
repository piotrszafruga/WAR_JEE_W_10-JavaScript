function checkArray(array){
    var result = [];
    for(var i = 0; i< array.length ; i++){
        var kazdyParzysty = true;
        for(var j = 0; j < array[i].length ; j++){
            if(array[i][j]%2===1){
                kazdyParzysty = false;
                break;
            }
        }
        result.unshift(kazdyParzysty)
    }
    return result;
}
// var arr = [
//     [11, 12],
//     [42, 2],
//     [-4, -120],
//     [0, 0],
//     [1, 34],
// ];
// var result = checkArray(arr);
// console.log(result);