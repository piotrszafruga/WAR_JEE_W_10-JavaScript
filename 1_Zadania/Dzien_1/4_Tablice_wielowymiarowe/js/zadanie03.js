function create2DArray(rows,cols) {
    var array = [];
    for (var i=0;i<rows;i++) {
        var ar = [];
        for (var j=0;j<cols;j++) {
            ar.push(i*cols+j+1);
        }
        array.push(ar);
    }
    return array;
}

var array1 = create2DArray(3,4);
print2DArray(array1);