function prime(num){
    if (num==1) {
        console.log("it is not a prime number");++
    } else if(num==2) {
        console.log("it is a prime number");
    }
    else{
        for(var i=2;i<num;i++){
            if(i%num==0){
                console.log("it is not a prime number");
            }
        }
        console.log("it is a prime number");
    }
}

prime(2);