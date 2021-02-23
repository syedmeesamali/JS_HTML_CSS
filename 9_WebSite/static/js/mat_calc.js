


/*Old jQuery based code
$(document).ready(function(){    
    $("#eCalculate").click(function(){
            //Check which sachet type is selected to update the result value
            //alert($(this).val());
            var sachet = $("select[name='choose']").val();
                var dia = $('#dia').val();
                var depth = $('#depth').val();
                var hole_width = $('#hole_width').val();
                var drill_nos = $('#drill_nos').val();
                var annular = (Math.PI*((hole_width/2)**2))*depth;
                var rebar_vol = (Math.PI*((dia/2)**2))*depth;
            if (sachet == "500ml") {
                var result = ((((annular-rebar_vol)/(Math.pow(10,6)))*drill_nos)/0.5)*1.25;
                result = result.toFixed(2);
                $('#result').text(result+" [500ml] sachets")
            } else if (sachet == "300ml") {
                var result = ((((annular-rebar_vol)/(Math.pow(10,6)))*drill_nos)/0.3)*1.25;
                result = result.toFixed(2);
                $('#result').text(result+" [300ml] sachets")
            } else {
                var result = (((((annular-rebar_vol)/(Math.pow(10,6)))*drill_nos))/3)*1.25;
                result = result.toFixed(2);
                $('#result').text(result+" [3 Ltr] Sets")
            }

    }); // End of anchoring epoxy function

    $("#mCalculate").click(function(){
            //Check which sachet type is selected to update the result value
            //alert($(this).val());
            var baggage = $("select[name='choose_one']").val();
                var areaslab = $('#slab_a').val();
                var thickness = $('#slab_t').val();
            if (baggage == "25kg") {
                var result_vol = areaslab * (thickness / 1000) * 115 ;
                result_vol = result_vol.toFixed(0);
                $('#result_bags').text(result_vol+" [25Kg] Bags")
            } else {
                var result_vol = areaslab * (thickness / 1000) * 58 ;
                result_vol = result_vol.toFixed(0);
                $('#result_bags').text(result_vol+" [50Kg] Bags")
            }

    }); // End of anchoring epoxy function


    $("#cCalculate").click(function(){
            //Check which sachet type is selected to update the result value
            //alert($(this).val());
            var mat_type = $("select[name='choose_two']").val();
                var length = $('#len').val();
            if (mat_type == "S512") {
                var result_ep = (length / 25);
                var result_fr = (length / 15);
                result_ep = result_ep.toFixed(0);
                result_fr = result_fr.toFixed(0);
                $('#epoxy1').text(result_ep + " [6Kg] Sets")
                $('#epoxy2').text("[Not Required]")
                $('#epoxy3').text("[Not Required]")
                $('#fire1').text(result_fr + " [25Kg] Bags")
            } else if (mat_type == "S1012") {
                var result_ep = (length / 20);
                var result_fr = (length / 10);
                result_ep = result_ep.toFixed(0);
                result_fr = result_fr.toFixed(0);
                $('#epoxy1').text(result_ep + " [6Kg] Sets")
                $('#epoxy2').text("[Not Required]")
                $('#epoxy3').text("[Not Required]")
                $('#fire1').text(result_fr + " [25Kg] Bags")
            } else {
                var result_ep1 = (length / 10);
                var result_ep2 = (length / 75);
                var result_ep3 = (length / 2.5);
                var result_fr = (length / 8);
                result_ep1 = result_ep1.toFixed(0);
                result_ep2 = result_ep2.toFixed(0);
                result_ep3 = result_ep3.toFixed(0);
                result_fr = result_fr.toFixed(0);
                $('#epoxy1').text("[Not Required]")
                $('#epoxy2').text(result_ep2 + " [30Kg] Sets")
                $('#epoxy3').text(result_ep3 + " [5Kg] Sets")
                $('#fire1').text(result_fr + " [25Kg] Bags")
            }

    }); // End of CFRP Calculation Function

    //Start of JACKETING Calculation portion
    $("#jCalculate").click(function(){
            var j_type = $("select[name='choose_three']").val();
            console.log("Value is: " + j_type);
            var length = $('#ilen').val() / 1000;
            var width = $('#iwid').val() / 1000;
            var height = $('#ht').val() / 1000;
            var nos = $('#nos').val();

            if (j_type == "100mm") {
                var result1 = (((length + 0.2) * (width + 0.2)) - (length * width)) * height * nos;
                result = 115 * result1;
                result1 = result1.toFixed(2);
                result = result.toFixed(0);
                $('#jreq1').text(result1 + " m3")
                $('#jreq').text(result + " [25Kg] Bags")
            } else if (j_type == "150mm") {
                var result1 = (((length + 0.3) * (width + 0.3)) - (length * width)) * height * nos;
                result = 115 * result1;
                result1 = result1.toFixed(2);
                result = result.toFixed(0);
                $('#jreq1').text(result1 + " m3")
                $('#jreq').text(result + " [25Kg] Bags")
            } else {
                var result1 = (((length + 0.4) * (width + 0.4)) - (length * width)) * height * nos;
                result = 115 * result1;
                result1 = result1.toFixed(2);
                result = result.toFixed(0);
                $('#jreq1').text(result1 + " m3")
                $('#jreq').text(result + " [25Kg] Bags")
            }
    }); // End of Jacketing Function
});
*/