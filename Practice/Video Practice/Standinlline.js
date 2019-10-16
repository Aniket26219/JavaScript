var array=[1,2,3,4,5,6,7,8,9,10];
function advancedqueue(){
    for(var i=10;i>=1;i--){
        function queue(arr ,item){
            arr.push(item);
            return arr.shift();
        }
        console.log("Before : "+JSON.stringify(array));
        console.log(queue(array, i));
        console.log("After : "+JSON.stringify(array));    
    }
}
advancedqueue();









// function queue(arr ,item){
//     arr.push(item);
//     return arr.shift();
// }
// var myArray=[1,2,3,4,5,6,7,8];
// console.log("Before : "+JSON.stringify(myArray));
// console.log(queue(myArray, 9));
// console.log("After : "+JSON.stringify(myArray));