document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Loaded');
        document.querySelector('#form').onsubmit = (event) => {
        event.preventDefault();
        const request = new XMLHttpRequest();                
        request.onreadystatechange = () => {
            if (data.success) {
                document.querySelector("#successAlert").style.display = 'block';
                document.querySelector("#successAlert").innerHTML = "Successfull";
                console.log(data2);
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
        request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        request.send(data);
        console.log("Name is: " + document.querySelector('#name').value);
        return false;
    }
});