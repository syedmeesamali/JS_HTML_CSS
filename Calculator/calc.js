/*
 * Implement all your JavaScript in this file!
 */

var num1 = '';
var num2 = '';
var operator = '';
var total = '';

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
                        $('#display').val('');
                        handleTotal();
                    }
                    else {
                        handleOperator(btn);
                    }   
              });
   
//Number handling function
function handleNumber(num) {    
    if ($('#display').val() == 'CLEAR' ||
        $('#display').val() == '+' || $('#display').val() == '-'
            || $('#display').val() == '*' || $('#display').val() == '&#247') {
        
    $('#display').val('');
    } else {
        $('#display').val($('#display').val() + num);
        if (operator !='') {
            num2 = $('#display').val();
        }
    }
    
    if (operator !='') {
        num2 = $('#display').val();
    }
}

//Operator handling function
function handleOperator(oper) {
    if (num1 =='') {
        num1 = $('#display').val();
        operator = oper;
        console.log(oper);
        $('#display').val(oper);
    }
    
}

//Clear the Calculator screen
function handleClear() {
    $('#display').val('CLEAR');
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
        case '&#247':
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