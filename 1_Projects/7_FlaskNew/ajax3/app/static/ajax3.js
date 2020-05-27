document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#form').onsubmit = (event) => {
        event.preventDefault();
        const currency = document.querySelector('#currency').value;
        const request = new XMLHttpRequest();                
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success) {
                const content = '1 USD is equal to: ' + data.rate.toFixed(2) + '[' + currency + ']';
                document.querySelector("#result").innerHTML = content;
                console.log(data);
            } else {
                document.querySelector("#result").innerHTML = "Some Error !!";
            }
        }
        const data = new FormData();
        data.append('currency', currency);     
        request.open('POST', '/convert', true); //Type, URL, Async boolean
        request.send(data);
        document.querySelector('#currency').value = '';
        return false;
    }
});