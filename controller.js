const eventClick = () => {
    fetch('http://headers.jsontest.com/')
    .then(response => response.json())
    .then(data => {
        document.getElementById("content").innerHTML = data; 
        console.log(data);
    });
}

document.getElementById("btnBuscar").addEventListener("click", eventClick);