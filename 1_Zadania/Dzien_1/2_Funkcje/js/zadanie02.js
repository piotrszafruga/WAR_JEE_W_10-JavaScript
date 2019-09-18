function poleIObwodKola(r) {
    if(typeof r !== "number"){
        return false;
    }
    console.log("Pole:");
    console.log(Math.PI * (Math.pow(r,2)));
    console.log("Obwod:");
    var obwod = 2 * Math.PI * r;
    console.log(obwod.toFixed(2));
}
poleIObwodKola(4);
console.log(poleIObwodKola("nieLiczba"));