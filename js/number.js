function isEvenNumber(number){
    var a = number % 2;
    var result = a == 0;
    return result;
}

function isAcceptableNumber(number){
    var a = number % 2 == 0;
    var b = number % 3 == 0;
    var result = !a && !b
    return result;
}

function isMultipleOf5(value){
    if(value % 5 == 0){
    return 1;
}else{
    return 0;
}
}

function divideBy2(){
}
