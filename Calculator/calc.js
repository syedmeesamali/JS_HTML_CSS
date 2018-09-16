/*
 * Implement all your JavaScript in this file!
 */
$(document).ready(function(){
   $('#button1').click(function(){
        $('button').on('click',function(e){
            var btn = e.target.innerHTML;
            if (btn >= 0 && btn <=9) {
                console.log('number');
            } else {
                console.log('operator');
            }
            
        })
   });

function handleNumber(num) {
    // code goes here
}
function handleOperator(oper) {
    // code goes here
}


});