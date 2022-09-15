function callDetails(tipo, id){
    window.location.href="./detalhes.html?tipo=" + tipo	+ "&id=" + id
    console.log("oiee")

}


function Card(filme, id) {
    let card = document.createElement("div")
    card.classList.add("cards")
    
    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "Poster do filme " + filme.titulo
    
    let titulo = document.createElement("p")
    titulo.innerText = filme.titulo
    
    let divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    let estrela = document.createElement("span")
    estrela.classList.add("material-icons")
    estrela.classList.add("estrela")
    estrela.innerText = "star"
    
    let nota = document.createElement("span")
    nota.innerText = filme.nota
    
    divNota.appendChild(estrela)
    divNota.appendChild(nota)
    
    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "detalhes"
    botao.onclick=function(){callDetails('filme', id)}

    
    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}

function CardSerie(serie, id) {
    let card = document.createElement("div")
    card.classList.add("cards")
    
    let poster = document.createElement("img")
    poster.src = serie.poster
    poster.alt = "Poster do serie " + serie.titulo
    
    let titulo = document.createElement("p")
    titulo.innerText = serie.titulo
    
    let divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    let estrela = document.createElement("span")
    estrela.classList.add("material-icons")
    estrela.classList.add("estrela")
    estrela.innerText = "star"
    
    let nota = document.createElement("span")
    nota.innerText = serie.nota
    
    divNota.appendChild(estrela)
    divNota.appendChild(nota)
    
    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "detalhes"
    botao.onclick=function(){callDetails('serie', id)}
    
    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}

