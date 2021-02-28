document.addEventListener('DOMContentLoaded', () => {    
    
    //Main Calculate function for the anchoring-epoxy material button
    document.querySelector('#eCalculate').onclick = () => 
    {
        var qty_val1 = document.getElementById("qty_val1").value;
        var price_val1 = document.getElementById("price_val1").value;
        var result_1 = qty_val1 * price_val1;
        result_1 = result_1.toFixed(2);
        document.querySelector("#result1").innerHTML = formatNumber(result_1);
        
        var qty_val2 = document.getElementById("qty_val2").value;
        var price_val2 = document.getElementById("price_val2").value;
        var result_2 = qty_val2 * price_val2;
        result_2 = result_2.toFixed(2);
        document.querySelector("#result2").innerHTML = formatNumber(result_2);

        var qty_val3 = document.getElementById("qty_val3").value;
        var price_val3 = document.getElementById("price_val3").value;
        var result_3 = qty_val3 * price_val3;
        result_3 = result_3.toFixed(2);
        document.querySelector("#result3").innerHTML = formatNumber(result_3);

        var qty_val4 = document.getElementById("qty_val4").value;
        var price_val4 = document.getElementById("price_val4").value;
        var result_4 = qty_val4 * price_val4;
        result_4 = result_4.toFixed(2);
        document.querySelector("#result4").innerHTML = formatNumber(result_4);

        var qty_val5 = document.getElementById("qty_val5").value;
        var price_val5 = document.getElementById("price_val5").value;
        var result_5 = qty_val5 * price_val5;
        result_5 = result_5.toFixed(2);
        document.querySelector("#result5").innerHTML = formatNumber(result_5);

        var qty_val6 = document.getElementById("qty_val6").value;
        var price_val6 = document.getElementById("price_val6").value;
        var result_6 = qty_val6 * price_val6;
        result_6 = result_6.toFixed(2);
        document.querySelector("#result6").innerHTML = formatNumber(result_6);

        var qty_val7 = document.getElementById("qty_val7").value;
        var price_val7 = document.getElementById("price_val7").value;
        var result_7 = qty_val7 * price_val7;
        result_7 = result_7.toFixed(2);
        document.querySelector("#result7").innerHTML = formatNumber(result_7);

        var qty_val8 = document.getElementById("qty_val8").value;
        var price_val8 = document.getElementById("price_val8").value;
        var result_8 = qty_val8 * price_val8;
        result_8 = result_8.toFixed(2);
        document.querySelector("#result8").innerHTML = formatNumber(result_8);

        var qty_val9 = document.getElementById("qty_val9").value;
        var price_val9 = document.getElementById("price_val9").value;
        var result_9 = qty_val9 * price_val9;
        result_9 = result_9.toFixed(2);
        document.querySelector("#result9").innerHTML = formatNumber(result_9);

        var final_result = Number(result_1) + Number(result_2) + Number(result_3) + 
                           Number(result_4) + Number(result_5) + Number(result_6) + 
                           Number(result_7) + Number(result_8) + Number(result_9);
        final_result = final_result.toFixed(2);
        document.querySelector("#final_result").innerHTML = formatNumber(final_result);
        
    }//End of calculation for anchoring - epoxy

    function formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

});//End of file