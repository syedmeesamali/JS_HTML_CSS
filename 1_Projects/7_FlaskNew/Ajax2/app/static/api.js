document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#myForm').onsubmit = () => {
        const request = new XMLHttpRequest();
        const currency = document.querySelector('#currency').value;
        request.open('POST', '/api');
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {
                console.log("Success");
                const content = '1 USD is equal to ${data.rate} ${currency}.';
                const result = content;
                const li = document.createElement('li');
                li.innerHTML = result;
                document.querySelector("#items").append(li);
            } else {
                console.log("Failed");
                const li = document.createElement('li');
                li.innerHTML = "There was an error!";
                document.querySelector("#items").append(li);
            }
        }
        document.querySelector('#currency').value = '';        
        return false;
    }
});