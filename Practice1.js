var Global = 10;
function function1(){
    global2 = 34;
}
function function2(){
    if (typeof Global != "undefined") {
        console.log("variable is not a undefined type")
    }
    if (typeof global2 != "undefined") {
        console.log("variable is not a undefined type")
    }
}
function1();
function2();