/*
 * Implement all your JavaScript in this file!
 */

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
                    //Separate Handler functions for numbers and Operators
                        handleNumber(btn);
                    } else if (btn == 'C') {
                        handleClear();
                    } else if (btn == '=') {
                    //Should not calculate total if num2 is empty
                        if (operator != '' && num2Flag == true) {
                            num2 = $('#display').val();
                            $('#display').val('');
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
    //Start with first condition - Take first number as below
    if (num1 == '' && opFlag == false) {
        $('#display').val($('#display').val() + num);
    //Take second number below and set flag to false to not continue condition
    } else if (num2 == '' && opFlag == true) {
        $('#display').val('');
        opFlag = false;
        $('#display').val($('#display').val() + num);
        }
     //Below will let us input the second number similar to first one
     else {
        num2Flag = true;
        $('#display').val($('#display').val() + num);
    }
}

//Operator handling function
function handleOperator(oper) {
    if (num1 == '') {
        //After operator is pressed, take the shown value as num1
        num1 = $('#display').val();
        operator = oper;
        opFlag = true;
    } else {
        operator = oper;
        opFlag = true;
       // $('#display').val(oper);
    }
}

//Clear the Calculator screen
function handleClear() {
    $('#display').val('');
    num1 = '';
    num2 = '';
    operator = '';
    total = '';
}


//Below function calculates the total based on the input buttons and operators
function handleTotal() {
    switch (operator) {
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
    }
    updateVariables();
}

function updateVariables() {
    num1 = total;
    num2 = '';
}

});