var testObj ={
    "A":"Aniket",
    "b":"Sagar",
    "C":"Shital",
    "d":"Snehal",
    "E":"Prajakta",
    "f":"Priyanka",
    "G":"Rajshree",
    "h":"Pratiksha"
}
function testprop(property){
    if (testObj.hasOwnProperty(property)) {
        return testObj[property];
    }
    else{
        return "not present";
    }
}
console.log(testprop("f"));