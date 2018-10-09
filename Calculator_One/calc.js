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

$(document).ready(function(){

        $('button').on('click',function(e){
            //Capture the button clicked
            let btn = e.target.innerHTML;
                    if (btn >= '0' && btn <= '9') {
                        handleNumber(btn);
                    } else if (btn == 'C') {
                        console.log("Num1: "+num1);
                        console.log("Oper: "+operator);
                        console.log("Num2: "+num2);
                        console.log("OpFlag: "+opFlag);
                        console.log("Num2Flag: "+num2Flag);
                        handleClear();
                    } else if (btn == '=') {
                        if (num2Flag == true) {
                            num2 = $('#display').val();
                            $('#display').val('');
                            num2Flag = false;
                            console.log("Num1: "+num1);
                            console.log("Oper: "+operator);
                            console.log("Num2: "+num2);
                            console.log("OpFlag: "+opFlag);
                            console.log("Num2Flag: "+num2Flag);
                            handleTotal();
                        } else {
                            $('#display').val('');
                            handleTotal();
                        }
                        
                    }
                    else {
                        console.log("Num1: "+num1);
                        console.log("Oper: "+operator);
                        console.log("Num2: "+num2);
                        console.log("OpFlag: "+opFlag);
                        console.log("Num2Flag: "+num2Flag);
                        handleOperator(btn);
                    }   
              });
   
//Number handling function
function handleNumber(num) {    
    if (num1 == '' && opFlag == false) {
            $('#display').val($('#display').val() + num);
            console.log("first number entry");
        } else if (opFlag == true) {
            $('#display').val('');
            opFlag = false;
            num2Flag = true;
            $('#display').val($('#display').val() + num);
        } else {
            num2Flag = true;
            $('#display').val($('#display').val() + num);
            console.log("second if for opFlag");
        }
        
}

//Operator handling function
function handleOperator(oper) {
    if (num1 == '') {
        num1 = $('#display').val();
        operator = oper;
        opFlag = true;
    } else {
        operator = oper;
        opFlag = true;
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
    
    /* switch (operator) {
        case '+':
            total = +num1 + +num2;
            $('#display').val(total);
            break;
        case '-':
            total = +num1 - +num2;
            $('#display').val(total);
            break;
        case '/':
            total = +num1 / +num2;
            $('#display').val(total);
            break;
        case '*':
            total = +num1 * +num2;
            $('#display').val(total);
            break;
    } */
    updateVariables();
}

function updateVariables() {
    num1 = total;
    num2 = num2;
}

});