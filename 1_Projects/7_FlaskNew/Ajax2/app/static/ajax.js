document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#formBtn').disabled = true;
    document.querySelector('#name').onkeyup = () => {
        document.querySelector('#formBtn').disabled = false;
    }
    
    document.querySelector('#myForm').onsubmit = () => {
        const li = document.createElement('li');
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const result = "Name: " + name + "Email: " + email;
        li.innerHTML = result;
        document.querySelector("#items").append(li);
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#formBtn').disabled = true;
        return false;
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