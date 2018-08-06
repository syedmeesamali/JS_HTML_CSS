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
    
//function practice to see the concept of abstraction
        function addition(a,b){
                return a+b;
        }
        function multiplication(a,b){
                result=0;
                for(let counter=0;counter<b;counter++){
                        result+=addition(a,b);
                }
                return result;
        }
//Below function is used to calculate the amount of commission for a particular value of sales.
//This is my first attempt to transfer my functions from VBA (Excel) to JavaScript.
function calculateCommission(salesValue) {
                const tier1 = 0.08;
                const tier2 = 0.12;
                const tier3 = 0.14;
                const tier4 = 0.15;
                salesValue=document.getElementById('salesInput').innerHTML;
                if(salesValue>0 & salesValue<=10000) {
                        return salesValue*tier1;
                } else if (salesValue>10000 & salesValue<=18000) {
                        return salesValue*tier2;
                } else if (salesValue>=18000 & salesValue<=25000) {
                        return salesValue*tier3;
                } else if(salesValue>25000) {
                        return salesValue*tier4;
                } else {
                        return 0;
                }
                
        }
        document.write("</ br> The commission for above mentioned sales is: <h1>" + calculateCommission(salesValue) +
                "</h1></ br>");