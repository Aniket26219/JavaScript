var record={
    "1":{
        "name":"Aniket",
        "city":"Nanded",
        "p languages":[
            "Java","Spring Boot","Java Script","MySql"
        ]
    },
    "2":{
        "name":"Sagar",
        "city":"Pune",
        "p languages":[ 
            "Java","Spring boot","Java Script","PHP"
        ]
    },
    "3":{
        "name":"Shital",
        "city":"Pune",
        "p languages":[
            "Java","Spring boot","Java Script","MongoDB"
        ]
    }
}
var recordcopy = JSON.parse(JSON.stringify(record));
function updatecollection(id, property, value){
    if(value === ""){
        delete record[id][property];
    }
    else if (property === "p languages") {
        record[id][property] = record[id][property] || [];
        record[id][property].push(value);
    }
    else{
        record[id][property] = value;
    }
    return record;
    
}
console.log(updatecollection("3","p languages",""))