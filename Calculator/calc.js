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
            //Check if the display area is clear then don't allow operators
            if ($('#display').val() == '' || $('#display').val() == 'CLEAR' ||
            $('#display').val() == '+' || $('#display').val() == '-'
            || $('#display').val() == '*' || $('#display').val() == '&#247') {
                if (btn >= '0' && btn <= '9') {
                //Separate Handler functions for numbers and Operators
                    handleNumber(btn);
                } else { handleClear(); }
            } else {
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
              }
   });      

//Number handling function
function handleNumber(num) {
    /*
    if ($('#display').val() == '+' || $('#display').val() == '-'
    || $('#display').val() == '*' || $('#display').val() == '&#247') {
        $('#display').val(item);
    } else {
    //Concatenate subsequent presses if NUMERIC
        $('#display').val($('#display').val() + item);
    } */
    
    displayBtn(num);
    if (num1 === '' && operator ==='') {
        num1 = num;
    } else {
        num2 = num;
    }
}

//Operator handling function
function handleOperator(oper) {
    //Save existing shown number as num1
    num1 = $('#display').val();
    //Clear the display
    $('#display').val('');
    //Show the operator
    displayBtn(oper);
    if (operator === '') {
        operator = oper;
    } else {
        handleTotal();
        operator = oper;
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


//Display the current button pressed
function displayBtn(item) {
    //If display is empty or CLEAR or any operators then take that item and show
    if ($('#display').val() == '' || $('#display').val() == 'CLEAR' ||
    $('#display').val() == '+' || $('#display').val() == '-'
    || $('#display').val() == '*' || $('#display').val() == '&#247') {
        $('#display').val(item);
    } else {
    //Concatenate subsequent presses if NUMERIC
        $('#display').val($('#display').val() + item);
    }
    
}

//Below function calculates the total based on the input buttons and operators
function handleTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            displayBtn(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayBtn(total);
            break;
        case '&#247':
            total = +num1 / +num2;
            displayBtn(total);
            break;
        case '*':
            total = +num1 * +num2;
            displayBtn(total);
            break;
    }
    updateVariables();
}

function updateVariables() {
    num1 = total;
    num2 = '';
}

});