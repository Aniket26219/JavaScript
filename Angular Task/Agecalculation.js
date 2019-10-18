
function calculateage(dob) { 
    var diffms = Date.now() - dob.getTime();
    var agedt = new Date(diffms); 
  
    return Math.abs(agedt.getUTCFullYear() - 1970);
}

console.log(calculateage(new Date(1998,02,26)));