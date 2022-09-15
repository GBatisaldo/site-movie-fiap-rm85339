let filmes = document.querySelector("#filmes")
dadosFilmes.forEach((filme, i) => filmes.appendChild(Card(filme, i)))

let series = document.querySelector("#series")
dadosSeries.forEach((serie, i) => series.appendChild(CardSerie(serie, i)))







