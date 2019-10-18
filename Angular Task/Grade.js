function grade(num){
    if(num<40&&num<60){
        console.log("Fail");
    }
    else if (num>=40&&num<60) {
        console.log("Pass");
    }
    else if (num>=60&&num<90) {
        console.log("First Class");
    }
    else if (num>=90 && num<=100) {
        console.log("Distinction");
    }
    else{
        console.log("invalid input");
    }
}
grade(95)