function nextInLine(arr, item){
    arr.push(item);
    return arr.unshift();
}
var array = [1,2,3,4,5,6]
console.log("Before : "+JSON.stringify(array));
console.log(nextInLine(array , 7));
console.log("After : "+JSON.stringify(array));