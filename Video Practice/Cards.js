function cards(card){
    var count=0;
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'A':
        case 'K':
        case 'Q':
        case 'J':
            count--;
            break;
    }
    var holdbet = "hold";
    if (count>0) {
        holdbet="bet";
    }
    return count + " " + holdbet;
}
console.log(cards('A'));