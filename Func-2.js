//Recursive function practice
function powerOf(base,exp){
    if (exp==0){
        return 1;
    } else {
        return base*powerOf(base,exp-1);
    }
}
