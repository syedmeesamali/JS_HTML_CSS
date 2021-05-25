document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#links_form').onsubmit = (event) => {
    event.preventDefault();
    console.log("Submit pressed!")
    const request = new XMLHttpRequest();                
    request.onload = () => {
        const data = JSON.parse(request.responseText);
        if (data.success) {
            console.log("New link uploaded!")
        } else {
            console.log("Error........!")
        }
    }
    const data = new FormData();
    data.append('name', document.querySelector('#myLink_name').value);
    data.append('url', document.querySelector('#myUrl').value);
    data.append('type', document.querySelector('#myLinkType').value);
    request.open('POST', '/Add_Link', true); //Type, URL, Async boolean
    request.send(data);
    }
});