var dropdown = document.getElementById('for-dropdown');
document.querySelectorAll('.dropdown-menu').forEach(function(e) {
    e.addEventListener('click', (e) => {
      console.log(e.target.innerHTML);
      dropdown.innerText = e.target.innerHTML;
    })
})

//Auto-complete function to fill in the names of various projects
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
//List of current projects in a specific fashion
  var countries = ["CCL GULF OFFICE", "CCL QATAR OFFICE", "Churchill Towers", "Kempinski Hotel", "North Gate Mall", "Tiara Hotel Tower", 
  "Viva bahriya - Pearl", "Prime Business Center", "OPERATIONS", "Latifa Tower", "Dubai Mall", "Lilian Tower", "DicoTech", 
  "Business Development", "ECC", "Marina 101", "Emirates NBD", "Naeem Mall", "Tiara Pkg-4", "KIZAD", "Dr. Riadh Hospital (Core wall)", 
  "Damac Heights", "Ghazi Warehouse", "Burj Daman", "Paragon Bay Mall", "Jafza Building 17", "Al-Shaali Building", "Amesco", 
  "Latifa Tower (L-15)", "Dr. Riadh Hospital (Ramp)", "FGB Building Jadaf", "Hydra Project", "Concorde Tower JLT", 
  "Kempinski Lower Roof", "Barari Towers", "Kempinski GF Lift", "Canadian Hospital", "The Address Phase 2", 
  "Jalila Foundation", "JAFZA", "Vision Tower", "Mandarin Hotel", "Address Fashion", "Damac - The Wave", "Lamcy Plaza", 
  "Azizi Developers", "Hansa Hotel", "Shapoorji G+4 Building", "Gate Towers Shapoorji", "Merano Tower Al-Sahel", 
  "Dr. Riadh Hospital (Roof)", "Staff Accomodation DIP", "Arcade Tower", "MILCO", "Villa DIP", "Continental", 
  "School Nad-al-hamr", "Building_Deira", "School Sharjah_Elite Design", "World Trade Center (KONE)", 
  "GEMS School (Sharjah)", "TECOM Towers (Transemirates)", "Coptic Church", "Habib Bank Building", "AbuDhabi School", 
  "ADCI HQ Building", "Dr. Ghanem Villa", "Jadaf Hotel Building", "Paragon Cinema", "Marina Continental", "Mazyad Mall", 
  "Asma Hotel Barsha", "Pointe Mall Palm", "Barsha Tower", "Nakheel Mall", "CCL KSA", "Palm D-Frond Villa 132", 
  "DM Building Rashidiya", "Al-Manzel Building Pool", "Dhiyyafa Building", "City Land Mall AVIC", "Medical Village KSA", 
  "DIB Bank Sharjah", "Hatta Building", "Aster Building Sharjah", "Retaj Hotel Riyadh", "Blue Bay Tower", "Furjan Building", 
  "Al-Nokhba School", "Motorcity Building", "Asisa Dental", "Sunset Mall", "Ibn-e-Batuta", "Agora Shopping Mall", 
  "CRC Stella WaterTank", "Lincoln Showroom", "Damac-7404", "Maven Spa", "Science Park Building", "KG4 Hospital", "Hera Project", 
  "Hussain Darwaish Bldg", "T2 Greens", "Elite-2 and 6", "Premmier Inn", "Barsha Pond Hotel", "Wasl Tower", "Deira Waterfront", 
  "Burjuman Mall", "Das Island_Emdad", "Mai Dubai", "HSBC Bank", "Damac Akoya", "Yas Mall", "DIB Deira", "Dubai Creek Cove", 
  "Sky Villa_Amesco", "Switching Station_L&T", "Meydan One (Salini Impregillo)", "Lilian Tower RCC Walls", "City Land Mall Beams", 
  "ME DO RE JLT", "Wafi Mall", "Lacasa Tecom Building", "King Faisal Hospital - KSA", "Police Academy AUH", "Villa on Palm", 
  "JBR Hospital", "Bloom Tower JVC", "Al-Tayer Building", "Al-Dana 2 Building", "Deira City Center", "Dovronbek", "Circle Mall JVC", 
  "GEMS Cambridge Sharjah", "ORASCOM Reem Island", "Khamis Al Qubsi", "Reem Plaza Riyadh", "Royal Continental", "PPI Coring 3rd floor", 
  "Deira Waterfront Repairs", "DEWA Jebel Ali Repairs", "Khansaheb Villa", "Al-Hazami JVC Project", "Crowne Plaza Complex", 
  "Ramboll", "Oberoi Building", "Raffah Building", "MOE Khansaheb", "Marina Arcade Dutco", "INC Media City", "Dilmunia Mall Bahrain", 
  "Manzil Building Karama", "Building in Silicon", "DIFC Gate Avenue Coring", "Cake and More", "Ewan Coring", "PT_Town Square", 
  "PT_Zawaya Al-Hebiah", "PT_DCH Palace", "Ali & Sons_AUH", "Adnan Contracting_Gunite", "AlTayer_Google", "Crown Prince Court", 
  "Marina Arcade 2019", "Hub Zero AFO", "Bridge Salini", "BW_Palm Villa", "Danube Fire NEB", "Abu-Khail Bldg", "Khansaheb Souqalbahar", 
  "Elite Business Bay", "Mama hotel CRC", "Gulf and Safa Dairies", "IAT Zayed University", "American University Sharjah", 
  "Brass Monkey ISGPLC", "Dubai Silicon Park", "Muraqqabat Building", "Al-Dhaih Bahrain", "H1 Building", "DIFC Tenants", 
  "Prudential Towers", "Jumeirah Villa Gulf Engg", "Marina Arcade Syndicate", "Westburry Tower APG", "BW Emirates Villa", 
  "Marina Bay Building", "Wisal Tower", "Yas Media Zone", "Bulgari Marina Lofts", "Wahda Mall AUH", "EMPOWER CR18", "Dubai Courts CR18", 
  "Al-Kazem Tower", "Fahim Villa", "BNS-U3 Tower JLT", "Soteria Wasl Restaurant", "RGSG Multiplex", "Central Park JVC", 
  "Muraqqabat Repairs A&B", "Burj Al Arab", "Burj Daman Gargash", "Fifty-One Tower", "Hattan tower barsha", "Marine Warehouse", 
  "Jumeirah Villa Design Infinity", "Sharjah Mosque", "WOW Yas Mall", "Creek Rise Tower", "Wafi Column Repairs", 
  "Day To Day Mall Transemirates", "Sterling East", "Barsha Villa", "ASGC Pump Airport", "Oud Metha Project"];

  /*An array containing all the country names in the world:
  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla",
  "Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin",
  "Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands",
  "Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands",
  "Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire",
  "Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
  "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji",
  "Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar",
  "Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras",
  "Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica",
  "Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon",
  "Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi",
  "Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova",
  "Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands",
  "Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman",
  "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino",
  "Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia",
  "Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis",
  "St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
  "Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu",
  "Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  */
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), countries);