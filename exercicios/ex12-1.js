const titulo = document.querySelector("#titulo")
const container = document.querySelector("#container")
const subtitulo =document.createElement("h2")
const img = document.createElement("img")
const body = document.querySelector("body")

let data = new Date()

let hora = data.getHours()

if (hora !== data.getHours()){
    hora = data.getHours()
}

titulo.innerText = "Hora do Dia"
subtitulo.innerText = `Agora são ${data.getTime()}`


if (hora > 18 || hora < 6){
    img.setAttribute("src", "noite.jpg")
    body.style.backgroundColor = "#4A5B6D"
}else if(hora < 12)
{
    img.setAttribute("src", "manha.jpg")
    body.style.backgroundColor = "#1E90FFFF"
}else{
    img.setAttribute("src", "tarde.jpg")
    body.style.backgroundColor = "#DAA520"
}



subtitulo.innerText = `Agora são ${data.getHours()} horas`
container.appendChild(subtitulo)
container.appendChild(img)

