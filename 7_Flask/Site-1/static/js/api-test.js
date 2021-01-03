const btn = document.getElementById('get_api')
btn.addEventListener('click', getAPI())

function getAPI()
{
    console.log("INisde function now");
    const app = document.getElementById('root')
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    app.appendChild(container)
    var request = new XMLHttpRequest()
    request.open('GET', 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', true)
    request.onload= function () 
    {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            const card = document.createElement('div')
            const h1 = document.createElement('h1')
            const p = document.createElement('p')
            p.textContent = "Sunrise time is: " + `${data.results.sunrise}`
            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
        } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
            }
        }
    request.send()
}
