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
            } else {
                handleOperator(btn);
            }
   
   });

//Number handling function
function handleNumber(num) {
    displayBtn(num);
    var numb1 = num;
}

//Operator handling function
function handleOperator(oper) {
    operator = oper;
    displayBtn(oper);

}

//Display the current button pressed
function displayBtn(itemTo) {
    $('#display').val(itemTo);
}

function handleTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            displayButton(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '&#247':
            total = +num1 / +num2;
            displayButton(total);
            break;
        case '*':
            total = +num1 * +num2;
            displayButton(total);
            break;
    }
    updateVariables();
}

function updateVariables() {
    num1 = total;
    num2 = '';
}

});