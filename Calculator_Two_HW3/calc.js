/*
 * Implement all your JavaScript in this file!
 */
"use strict";
$(document).ready(function(){
    $('button').on('click', function(e) {
        let btn = e.target;
        const action = btn.dataset.action;
        if (!action){
            console.log("Number key pressed")
        }

    });


});