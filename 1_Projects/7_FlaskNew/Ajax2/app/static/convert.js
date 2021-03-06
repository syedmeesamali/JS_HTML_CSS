document.addEventListener('DOMContentLoaded', () => {
        console.log("lATEST NOW");        
        document.querySelector('#form').onsubmit = (event) => {
        event.preventDefault();
        const currency = document.querySelector('#currency').value;
        console.log("Currency entered is: " + currency);
        const request = new XMLHttpRequest();                
        request.onload = () => {
            console.log("Response text: " + request.responseText);
            const data = JSON.parse(request.responseText);
            if (data.success) {
                console.log("Success");
                const content = '1 USD is equal to ${data.rate} ${currency}.';
                const result = content;
                document.querySelector("#contents").innerHTML = content;
            } else {
                console.log("Failed");
                document.querySelector("#contents").innerHTML = "Some Error !!";
            }
        }
        const data = new FormData();
        data.append('currency', currency);     
        request.open('POST', '/convert');
        request.setRequestHeader('content-type', 'application/json');
        request.send(data);
        console.log("Didn't reach here??");
        document.querySelector('#currency').value = '';
        return false;
    }
});