function queue(arr ,item){
    arr.push(item);
    return arr.shift();
}
var myArray=[1,2,3,4,5,6,7,8];
console.log("Before : "+JSON.stringify(myArray));
console.log(queue(myArray, 9));
console.log("After : "+JSON.stringify(myArray));