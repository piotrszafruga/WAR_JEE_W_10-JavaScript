//Exercise 1.
function getNumber(number, list) {
    for (i=0; i<list.length;i++) {
        if (list[i]===number) {
            return true;
        }
    }
    return false;
}

//Exercise 2.
function createIdentityMatrix(rows) {
    var list = Array(rows);

    for (i=0; i<rows; i++) {
        list[i] = Array(rows);
        for (j=0; j<rows; j++) {
            list[i][j] = 0;
        }
    }

    console.log("test");
    for (i=0; i<rows; i++) {
        list[i][i] = 1;
    }

    return list;
}

//Exercise 3.
var Tree = function(type) {
    this.type = type;
}

Tree.prototype.bloom = function() {
    return "I'm blooming";
}




//
// var list = [1,2,3,4,5,6];
// console.log(getNumber(9,list));
//console.log(createIdentityMatrix(3));
// var tree1 = new Tree("oak");
// console.log(tree1.bloom());