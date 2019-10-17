function multiarr(arr){
    var product = 1;
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = 0 ; j < arr[i].length ; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var total=multiarr([[1,2,3],[4,6,2][8,5,9]]);
console.log(total);