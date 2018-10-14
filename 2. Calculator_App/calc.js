/*
 * Implement all your JavaScript in this file!
 */
"use strict";
var num1 = '';
var num2 = '';
var operator = '';
var total = '';
var opFlag = false;
var num2Flag = false;
var totFlag = false;

$(document).ready(function(){

        $('button').on('click',function(e){
            //Capture the button clicked
            let btn = e.target.innerHTML;
                    if (btn >= '0' && btn <= '9') {
                        handleNumber(btn);
                    } else if (btn == 'C') {
                        handleClear();
                    } else if (btn == '=') {
                        if (num2Flag == true) {
                            num2 = $('#display').val();
                            $('#display').val('');
                            num2Flag = false;
                            handleTotal();
                        } else {
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
    if (num1 == '' && opFlag == false) {
            $('#display').val($('#display').val() + num);
        } else if (opFlag == true && totFlag == false) {
                $('#display').val('');
                opFlag = false;
                num2Flag = true;
                $('#display').val($('#display').val() + num);
            } else if (opFlag == false && totFlag == true) {
                $('#display').val('');
                num1 = '';
                opFlag = false;
                totFlag = false;
                num2Flag = true;
                $('#display').val($('#display').val() + num);
            } else {
                num2Flag = true;
                $('#display').val($('#display').val() + num);
        }
        
}

//Operator handling function
function handleOperator(oper) {
    if (num1 == '' && opFlag != true) {
        num1 = $('#display').val();
        operator = oper;
        opFlag = true;
        console.log("Operator 1st if: " + operator);
        console.log("Total flag is: " + totFlag);
    } else {
        //operator = oper;
        opFlag = true;
        console.log("Operator second if: " + operator);
        console.log("Total flag is: " + totFlag);
    }
}

//Clear the Calculator screen
function handleClear() {
    $('#display').val('');
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
    opFlag = false;
    num2Flag = false;
    totFlag = false;
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
    updateVariables();
}

function updateVariables() {
    if (num1 != '' && operator != '' && num2 !='') {
        totFlag = true;
        console.log("total flag is set");
    } else {
        totFlag = false;
        console.log("total flag CLEAR");
    }
    
    num1 = total;
    num2 = num2;
    console.log("opflag: " + opFlag);
    console.log("num1: " + num1);
    console.log("num2: " + num2);
}

});