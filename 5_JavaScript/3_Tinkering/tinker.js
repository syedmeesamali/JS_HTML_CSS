document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#reset').addEventListener('click', () => {
        window.location.reload();
    })
})

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#reset').addEventListener('click', () => {
//     console.log("Inside now!");
//     const request = new XMLHttpRequest();                
//     request.onload = () => {
//         if (request.status === 200) {
//             var elements = request.response.getElementByTagName("a");
//             for (x of elements) {
//                 if (x.href.match(/\.(jpe?g|png|gif)$/)) {
//                     let img = document.createElement("img");
//                     img.src = x.href;
//                     document.body.appendChild(img);
//                 }
//             }
//         } else {
//             alert("request failed: " + request.status);
//         }
//     }
//     request.open('GET', 'localhost/img', true); //Type, URL, Async boolean
//     request.responseType = 'blob';
//     request.send();
//     })
// });