document.addEventListener('DOMContentLoaded', () => {    
    
    //Main Calculate function for the anchoring-epoxy material button
    document.querySelector('#eCalculate').onclick = () => 
    {
        var epoxy = document.getElementById("anchoring");
        var sachet = epoxy.options[epoxy.selectedIndex].innerText;
        var dia = document.getElementById("dia").value;
        var depth = document.getElementById("depth").value;
        var hole_width = document.getElementById("hole_width").value;
        var drill_nos = document.getElementById("drill_nos").value;
        var annular = (Math.PI*((hole_width/2)**2))*depth;
        var rebar_vol = (Math.PI*((dia/2)**2))*depth;
        if (sachet == "300ml Sachet")
        {
            var result = ((((annular-rebar_vol)/(Math.pow(10,6)))*drill_nos)/0.3)*1.50;
            result = result.toFixed(2);
            document.querySelector("#result").style.display = 'block';
            document.querySelector("#result").innerHTML = result + " [300ml] sachets required"
            console.log("Correct selection; Result is: " + result);
            setTimeout(() => {
                document.querySelector("#result").style.display = 'none';
            }, 4000);
            
        } else if (sachet == "500ml Sachet")
        {
            var result = ((((annular-rebar_vol)/(Math.pow(10,6)))*drill_nos)/0.5)*1.50;
            result = result.toFixed(2);
            document.querySelector("#result").style.display = 'block';
            document.querySelector("#result").innerHTML = result + " [500ml] sachets required"
            setTimeout(() => {
                document.querySelector("#result").style.display = 'none';
            }, 4000);
        } else 
        {
            var result = ((((annular-rebar_vol)/(Math.pow(10,6)))*drill_nos)/3.0)*1.50;
            result = result.toFixed(2);
            document.querySelector("#result").style.display = 'block';
            document.querySelector("#result").innerHTML = result + " [3 Ltr] sets required"
            setTimeout(() => {
                document.querySelector("#result").style.display = 'none';
            }, 4000);
        }
    }//End of calculation for anchoring - epoxy

    //Main Calculate function for the micro-concrete material calculation
    document.querySelector('#cCalculate').onclick = () => 
    {
        var bags = document.getElementById("micro");
        var bags_val = bags.options[bags.selectedIndex].innerText;
        var slab_area = document.getElementById("slab_area").value;
        var slab_depth = document.getElementById("slab_depth").value;
        if (bags_val == "25 Kg")
        {
            var result_vol = slab_area * (slab_depth / 1000) * 115 ;
            result_vol = result_vol.toFixed(0);
            document.querySelector("#result_vol").style.display = 'block';
            document.querySelector("#result_vol").innerHTML = result_vol + " [25 Kg] bags required"
            setTimeout(() => {
                document.querySelector("#result_vol").style.display = 'none';
            }, 4000);
            
        } else 
        {
            var result_vol = slab_area * (slab_depth / 1000) * 58 ;
            result_vol = result_vol.toFixed(0);
            document.querySelector("#result_vol").style.display = 'block';
            document.querySelector("#result_vol").innerHTML = result_vol + " [50 Kg] bags required"
            setTimeout(() => {
                document.querySelector("#result_vol").style.display = 'none';
            }, 4000);
        }
    }//End of micro

    //Main Calculate function for CFRP calculation
    document.querySelector('#fCalculate').onclick = () => 
    {
        var cfrp = document.getElementById("CFRP");
        var cfrp_val = cfrp.options[cfrp.selectedIndex].innerText;
        var cfrp_len = document.getElementById("cfrp_len").value;
        if (cfrp_val == "S512 Strips")
        {
            var result_ep = (cfrp_len / 25);
            var result_fire = (cfrp_len / 15);
            result_ep = result_ep.toFixed(0);
            result_fire = result_fire.toFixed(0);
            document.querySelector("#result_cfrp").style.display = 'block';
            document.querySelector("#result_cfrp").innerHTML = result_ep + " set epoxy, " + result_fire + " bags 213f" 
            setTimeout(() => {
                document.querySelector("#result_cfrp").style.display = 'none';
            }, 6000);
            
        } else if (cfrp_val == "S1012 Strips")
        {
            var result_ep = (cfrp_len / 20);
            var result_fire = (cfrp_len / 10);
            result_ep = result_ep.toFixed(0);
            result_fire = result_fire.toFixed(0);
            document.querySelector("#result_cfrp").style.display = 'block';
            document.querySelector("#result_cfrp").innerHTML = result_ep + " set epoxy, " + result_fire + " bags 213f" 
            setTimeout(() => {
                document.querySelector("#result_cfrp").style.display = 'none';
            }, 6000);
        } else
        {
            var result_ep2 = (cfrp_len / 75);
            var result_ep3 = (cfrp_len / 2.5);
            var result_fire = (cfrp_len / 8);
            result_ep2 = result_ep2.toFixed(0);
            result_ep3 = result_ep3.toFixed(0);
            result_fire = result_fire.toFixed(0);
            document.querySelector("#result_cfrp").style.display = 'block';
            document.querySelector("#result_cfrp").innerHTML = result_ep2 + " [30Kg] 300 epoxy, " + result_ep2 
                                            + " [5Kg] 330 epoxy, " + result_fire + " bags 213f" 
            setTimeout(() => {
                document.querySelector("#result_cfrp").style.display = 'none';
            }, 6000);
        }
    }//End of CFRP

    //Main Calculate function for Jacketing calculations
    document.querySelector('#jCalculate').onclick = () => 
    {
        var jacket = document.getElementById("Jacketing");
        var jacket_val = jacket.options[jacket.selectedIndex].innerText;
        var iwid = document.getElementById("iwid").value;
        var ilen = document.getElementById("ilen").value;
        var idepth = document.getElementById("idepth").value;
        var col_nos = document.getElementById("col_nos").value;
        iwid = iwid / 1000; ilen = ilen / 1000; idepth = idepth / 1000;     //mm to m
        if (jacket_val == "100mm")
        {
            var result_m3 = (((ilen + 0.2) * (iwid + 0.2)) - (ilen * iwid)) * idepth * col_nos;
            result_bags = 115 * result_m3;
            result_m3 = result_m3.toFixed(2);
            result_bags = result_bags.toFixed(0);
            document.querySelector("#result_jacket").style.display = 'block';
            document.querySelector("#result_jacket").innerHTML = result_m3 + " m3, " + result_bags + " [25Kg] bags" 
            setTimeout(() => {
                document.querySelector("#result_jacket").style.display = 'none';
            }, 6000);
            
        } else if (jacket_val == "150mm")
        {
            var result_m3 = (((ilen + 0.3) * (iwid + 0.3)) - (ilen * iwid)) * idepth * col_nos;
            result_bags = 115 * result_m3;
            result_m3 = result_m3.toFixed(2);
            result_bags = result_bags.toFixed(0);
            document.querySelector("#result_jacket").style.display = 'block';
            document.querySelector("#result_jacket").innerHTML = result_m3 + " m3, " + result_bags + " [25Kg] bags" 
            setTimeout(() => {
                document.querySelector("#result_jacket").style.display = 'none';
            }, 6000);
        } else
        {
            var result_m3 = (((ilen + 0.4) * (iwid + 0.4)) - (ilen * iwid)) * idepth * col_nos;
            result_bags = 115 * result_m3;
            result_m3 = result_m3.toFixed(2);
            result_bags = result_bags.toFixed(0);
            document.querySelector("#result_jacket").style.display = 'block';
            document.querySelector("#result_jacket").innerHTML = result_m3 + " m3, " + result_bags + " [25Kg] bags" 
            setTimeout(() => {
                document.querySelector("#result_jacket").style.display = 'none';
            }, 6000);
        }
    }

//Main Calculate function for rebar calculations
document.querySelector('#rCalculate').onclick = () => 
{
    var rebars = document.getElementById("rebars");
    var rebar_val = rebars.options[rebars.selectedIndex].innerText;
    var rebar_len = document.getElementById("rebar_len").value;
    if (rebar_val == "10mm")
    {
        var result_rebar = rebar_len * 0.617;
        result_rebar = result_rebar.toFixed(0);
        document.querySelector("#result_rebar").style.display = 'block';
        document.querySelector("#result_rebar").innerHTML = result_rebar + " [Kg]" 
        setTimeout(() => {
            document.querySelector("#result_rebar").style.display = 'none';
        }, 6000);
    } else if (rebar_val == "12mm")
    {
        var result_rebar = rebar_len * 0.89;
        result_rebar = result_rebar.toFixed(0);
        document.querySelector("#result_rebar").style.display = 'block';
        document.querySelector("#result_rebar").innerHTML = result_rebar + " [Kg]" 
        setTimeout(() => {
            document.querySelector("#result_rebar").style.display = 'none';
        }, 6000);
    } else if (rebar_val == "16mm")
    {
        var result_rebar = rebar_len * 1.58;
        result_rebar = result_rebar.toFixed(0);
        document.querySelector("#result_rebar").style.display = 'block';
        document.querySelector("#result_rebar").innerHTML = result_rebar + " [Kg]" 
        setTimeout(() => {
            document.querySelector("#result_rebar").style.display = 'none';
        }, 6000);
    } else if (rebar_val == "20mm")
    {
        var result_rebar = rebar_len * 2.47;
        result_rebar = result_rebar.toFixed(0);
        document.querySelector("#result_rebar").style.display = 'block';
        document.querySelector("#result_rebar").innerHTML = result_rebar + " [Kg]" 
        setTimeout(() => {
            document.querySelector("#result_rebar").style.display = 'none';
        }, 6000);
    } else if (rebar_val == "25mm")
    {
        var result_rebar = rebar_len * 3.85;
        result_rebar = result_rebar.toFixed(0);
        document.querySelector("#result_rebar").style.display = 'block';
        document.querySelector("#result_rebar").innerHTML = result_rebar + " [Kg]" 
        setTimeout(() => {
            document.querySelector("#result_rebar").style.display = 'none';
        }, 6000);
    } else
    {
        var result_rebar = rebar_len * 6.31;
        result_rebar = result_rebar.toFixed(0);
        document.querySelector("#result_rebar").style.display = 'block';
        document.querySelector("#result_rebar").innerHTML = result_rebar + " [Kg]" 
        setTimeout(() => {
            document.querySelector("#result_rebar").style.display = 'none';
        }, 6000);
    }
} //End of rebar calculation


});