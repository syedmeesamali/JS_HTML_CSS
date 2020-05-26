document.addEventListener('DOMContentLoaded', () => {
        const currency = document.querySelector('#currency').value;
        document.querySelector('#myForm').onsubmit = () => {
        console.log("Currency entered is: " + currency);
        const request = new XMLHttpRequest();        
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {
                console.log("Success");
                const content = '1 USD is equal to ${data.rate} ${currency}.';
                const result = content;
                document.querySelector("#contents").innerHTML = content;
            } else {
                console.log("Failed");
                document.querySelector("#contents").innerHTML = "Error";
            }
        }
        const data = new FormData();
        data.append('currency', currency);
        request.open('POST', '/convert', true);
        req.setRequestHeader('content-type', 'application/json');
        request.send(data);
        return false;
        document.querySelectorAll('#currency').value = '';        
    }
});