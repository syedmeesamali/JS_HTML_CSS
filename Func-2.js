//Recursive function practice - power function
function powerOf(base,exp){
    if (exp==0 | exp<0){
        return 1;
    } else {
        return base*powerOf(base,exp-1);
    }
}

//Recursive function practice - factorial of a number
function factorial(n){
    if (n==1 | n<1){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}

//Function to calculate minimum of two numbers
function calMin(a,b){
    if (a<b){
        return a;
    } else {
        return b;
    }
}

//Recursive function find whether a number is even or not
function isEven(n){
    if (n==0){
        return true;
    } else if (n==1 | n<0) {
        return false;
    } else {
        return isEven(n-2);
    }
}