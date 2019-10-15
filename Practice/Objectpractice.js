function objectpractice(val){
    var objects = {
        "A":"Aniket",
        "B":"Bhavesh",
        "C":"Charlie",
        "S1":"Sagar",
        "S2":"Shital",
        "S3":"Swaraj"
    };
    var result = objects[val];
    return result;
}
console.log(objectpractice("S1"));