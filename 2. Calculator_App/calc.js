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
var nonNumFlag = false;

$(document).ready(function(){

        $('button').on('click',function(e){
            //Capture the button clicked
            let btn = e.target.innerHTML;
                    if (btn >= '0' && btn <= '9') {
                        nonNumFlag = false;
                        handleNumber(btn);
                    } else if (btn == 'C') {
                        nonNumFlag = true;
                        handleClear();
                    } else if (btn == '=') {
                        totFlag = true;
                        nonNumFlag = true;
                        /*
                        if (num2Flag == false) {
                            num2 = $('#display').val();
                            $('#display').val('');
                            num2Flag = true;
                            handleTotal();
                        } else {
                            num2 = $('#display').val();
                            $('#display').val('');
                          */  
                         handleTotal();
                        
                    }
                    else {
                        nonNumFlag = true;
                        handleOperator(btn);
                    }   
              });
   
//Number handling function
function handleNumber(num) {    
    console.log("num1: %c["+num1+"]%c num2: %c["+num2+"]%c num: %c["+num+"]"
    ,'color: red;','color: black;','color: red;','color: black;','color: red;');
    console.log("OpFlg: %c["+opFlag+"]%c noNumFlg : %c["+nonNumFlag+"]",'color: blue;','color: black;','color: blue;');
    console.log("num2Flg : %c["+num2Flag+"]%c totFlag: %c["+ totFlag+"]",'color: blue;','color: black;','color: blue;');
    if (num1 != '' && nonNumFlag == true) {
        $('#display').val('');
        nonNumFlag = false;
        $('#display').val($('#display').val() + num);
    } else if (num1 == '' && totFlag == true) {
        $('#display').val('');
        totFlag = false;
        $('#display').val($('#display').val() + num);
        
    } else if (nonNumFlag == true && totFlag == false && num2Flag == false) {
        $('#display').val('');
        nonNumFlag = false;
        $('#display').val($('#display').val() + num);
    } else {
        $('#display').val($('#display').val() + num);
    }
}

//Operator handling function
function handleOperator(oper) {
    if (num1 == '' && opFlag == false && num2Flag == false && totFlag == false
        && nonNumFlag == false) {
        operator = oper;   
        //Set flags together to visualize better
        opFlag = true;   num2Flag = true;  nonNumFlag = false;
        num1 = $('#display').val(); //Because num2Flag is false
    } else if (opFlag == true && num2Flag == true && totFlag == false 
        && nonNumFlag == true) {
        console.log("New Loop for handling");
        num2 = $('#display').val();
        num2Flag = false;
        handleTotal();
        operator = oper;
        nonNumFlag = true;
    } else if (opFlag == true && num2Flag == false && totFlag == false 
        && nonNumFlag == true) {
        console.log("New Loop for handling");
        num2 = $('#display').val();
        num2Flag = false;
        handleTotal();
        nonNumFlag = true;
    } else {
        opFlag = true;
        operator = oper;
        num1 = $('#display').val();
    }

    console.log("num1: %c["+num1+"]%c num2: %c["+num2+"]%c num: %c["+oper+"]"
    ,'color: red;','color: black;','color: red;','color: black;','color: red;');
    console.log("OpFlg: %c["+opFlag+"]%c noNumFlg : %c["+nonNumFlag+"]",'color: blue;','color: black;','color: blue;');
    console.log("num2Flg : %c["+num2Flag+"]%c totFlag: %c["+ totFlag+"]",'color: blue;','color: black;','color: blue;');
}

//Clear the Calculator screen
function handleClear() {
    $('#display').val('');
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
    opFlag = false;
    totFlag = false
    num2Flag = false;
    nonNumFlag = false;
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
   console.log("num1: %c["+num1+"]%c num2: %c["+num2+"]%c num: %c["+operator+"]"
    ,'color: red;','color: black;','color: red;','color: black;','color: red;');
   console.log("OpFlg: %c["+opFlag+"]%c noNumFlg : %c["+nonNumFlag+"]",'color: blue;','color: black;','color: blue;');
   console.log("num2Flg : %c["+num2Flag+"]%c totFlag: %c["+ totFlag+"]",'color: blue;','color: black;','color: blue;');
}


function updateVariables() { 
    num1 = '';
    num2 = num2;
}

});