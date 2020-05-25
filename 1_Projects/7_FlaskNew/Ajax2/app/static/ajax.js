document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#myForm').onsubmit = function(event) {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        var res = document.getElementById('result');
        res.innerHTML = "Name is: " + name + " and email is: " + email;
    }
});
    // function do_ajax() {
    //     var req = new XMLHttpRequest();
    //     var res = document.getElementById('result');
    //     req.onload  = () => {
    //         const response = req.responseText();
    //         res.innerHTML = response;
    //     } 
    //     req.open('POST', '/save_form');
    //     req.setRequestHeader('content-type', 'application/json');
    //     req.send("name=" + document.getElementById('name').value);
    // }