function normalnotequals(){
    if(3 != '3'){
        return 'not equal';
    }
    return 'equal';
}
console.log(normalnotequals());
function strictnotequals(){
    if('3' !== 3){
        return 'not equal';
    }
    return 'equal';
}
console.log(strictnotequals());