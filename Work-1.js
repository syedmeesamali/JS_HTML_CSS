//Practice for various functions
const power=function(base,exponent){
    let result=1;
    for (let count=0;count<exponent;count++){
        result*=biase;
    }
    return result;
}
//Code for part-1 of Exercise-2 from book "Eloquent Javascript"
//Printing # triangle
for (i=1;i<=7;i++){ console.log("#".repeat(i)); }

//Code for part-2 of Exercise-2 from book "Eloquent Javascript"
//Famous FizzBuzz printing
for (i=1;i<=40;i++){
    if (i%3==0 && i%5==0) { console.log("FizzBuzz"); } 
    else if (i%3==0) { console.log("Fizz"); } 
    else if (i%5==0) { console.log("Buzz"); } 
    else { console.log(i); }
}

//Code for part-3 of Exercise-2 from book "Eloquent Javascript"
//Printing checkerboard pattern
counter=8;
for (i=1;i<=counter;i++){
        if (i%2==0) { console.log(" "+"# ".repeat(counter)); }
        else  { console.log("# ".repeat(counter)); }
}

//Function programming Exercise-1: Minimum function
function minimumNum(a,b){
    if (a<b){
        return a+" is minimum";
    } else {
        return b+" is minimum";
        }
    }