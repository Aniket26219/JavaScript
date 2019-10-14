function prime(num){
    if (1) {
        console.log("it is not a prime number");
    } else if(2) {
        console.log("it is a prime number");
    }
    else{
        for(var i=2;i<=num;i++){
            if(i%num==0){
                console.log("it is not a prime number");
            }
        }
        console.log("it is a prime number");
    }
}

prime(23);