/*
 * Implement all your JavaScript in this file!
 */
"use strict";
var num1 = '';
var num2 = '';
var operator = '';
var total = '';
var opCount = 0;
var opFlag = false;
var num2Flag = false;
var totCount = 0;

$(document).ready(function(){

        $('button').on('click',function(e){
            //Capture the button clicked
            let btn = e.target.innerHTML;
                    if (btn >= '0' && btn <= '9') {
                        handleNumber(btn);
                    } else if (btn == 'C') {
                        handleClear();
                    } else if (btn == '=') {
                        totCount ++ ;
                        if (num2Flag == false) {
                            console.log("Num2flag: " + num2Flag)
                            num2 = $('#display').val();
                            $('#display').val('');
                            num2Flag = true;
                            handleTotal();
                        } else {
                            num2 = $('#display').val();
                            console.log("Num2flag: " + num2Flag)
                            $('#display').val('');
                            handleTotal();
                        }
                    }
                    else {
                        handleOperator(btn);
                    }   
              });
   
//Number handling function
function handleNumber(num) {    
    console.log("Num1 is: "+num1);
    console.log("OpCount is: "+opCount);
    if (opCount == 1 && opFlag == true) {
        $('#display').val('');
        opFlag = false;
        $('#display').val($('#display').val() + num);
    } else if (opCount == 1 && totCount == 1) {
        $('#display').val('');
        totCount ++;
        $('#display').val($('#display').val() + num);
    } else if (opCount == 2 && totCount == 2) {
        $('#display').val('');
        totCount = 1;
        $('#display').val($('#display').val() + num);
    } else {
        $('#display').val($('#display').val() + num);
    }
}

//Operator handling function
function handleOperator(oper) {
    opCount++;
    opFlag = true;
    if (opCount == 1) {
        num1 = $('#display').val();
        operator = oper;
        console.log("Num1 is: "+num1);
        console.log("OpCount is: "+opCount);
        console.log("Oper is: "+operator);
        console.log("Total Count is: "+totCount);
    } else if (opCount == 2) {
        //operator = oper;
        num1 = $('#display').val();
        operator = oper;
        console.log("Num1 is: "+num1);
        console.log("OpCount is: "+opCount);
        console.log("Oper is: "+operator);
        console.log("Total Count is: "+totCount);
    } else {
        num1 = $('#display').val();
        operator = oper;
        console.log("Num1 is: "+num1);
        console.log("OpCount is: "+opCount);
        console.log("Oper is: "+operator);
        console.log("Total Count is: "+totCount);
        opCount = 0;
    }
}

//Clear the Calculator screen
function handleClear() {
    $('#display').val('');
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
    opCount = 0;
    opFlag = false
    num2Flag = false;
    totCount = 0;
}


//Below function calculates the total based on the input buttons and operators
function handleTotal() {
   if (operator == "+") {
        total = (+num1) + (+num2);
        $('#display').val(total);
   } else if (operator == "-") {
        total = (+num1) - (+num2);
        $('#display').val(total);
   } else if (operator == "*") {
        total = (num1) * (num2);
        $('#display').val(total);
   } else {
        total = (+num1) / (+num2);
        $('#display').val(total);
   }
   console.log("Num1: " + num1);
   console.log("Num2: " + num2);
   console.log("Oper: " + operator);

   updateVariables();
}


function updateVariables() { 
    num1 = '';
    num2 = num2;
}

});