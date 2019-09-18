function calculateTip(amount, rating) {
    var table = [["Very good service",[0.25]], ["Good service",[0.2]], ["Neutral service",[15]], ["Bad service",[0]]]
    var res = 0;
    for (var i =0; i<table.length; i++) {
        if (rating===table[i][1]) {
            res = amount * table[i][2];
            return res;
        }
    }
    return "Nieczytelne dane";


}