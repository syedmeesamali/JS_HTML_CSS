document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#form').onsubmit = (event) => {
        event.preventDefault();
        const request = new XMLHttpRequest();                
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {
                document.querySelector("#successAlert").style.display = 'block';
                document.querySelector("#successAlert").innerHTML = "Successfull";
            } else {
                document.querySelector("#errorAlert").style.display = 'block';
                document.querySelector("#errorAlert").innerHTML = "Some Error";
            }
        }
        const data = new FormData();
        data.append('name', document.querySelector('#name').value);
        data.append('email', document.querySelector('#email').value);
        data.append('title', document.querySelector('#title').value);
        data.append('message', document.querySelector('#message').value);
        request.open('POST', '/save_form', true); //Type, URL, Async boolean
        request.send(data);
        //return false;
    }
});