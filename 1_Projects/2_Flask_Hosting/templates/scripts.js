
eventListeners();

function eventListeners() {
    document.querySelector('#form1').addEventListener('submit', newLink);
}
function newLink(e)
{
    e.preventDefault();
    const links = document.getElementById('addlink').value;
    console.log(links)
    var ol = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(links));
    ol.appendChild(li)

}