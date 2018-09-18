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
                handleClear(btn);
            } else {
                handleOperator(btn);
            }
   
   });

//Number handling function
function handleNumber(num) {
    displayBtn(num);
    if (num1 === '' && operator ==='') {
        num1 = num;
        operator = '';

    } else {
        num2 = num;
    }
}

//Clear the Calculator screen
function handleClear(num) {
    $('#display').val('');
}

//Operator handling function
function handleOperator(oper) {
    num1 = $('#display').val();
    displayBtn(oper);
    if (operator ==='') {
        operator = oper;
    } else {
        handleTotal();
        operator = oper;
    }
}

//Display the current button pressed
function displayBtn(item) {
    if ($('#display').val() == '') {
        $('#display').val(item);    
    } else {
        $('#display').val($('#display').val() + item);
    }
    
}


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
        case '=':
            handleTotal();
            break;
    }
    updateVariables();
}

function updateVariables() {
    num1 = total;
    num2 = '';
}

});