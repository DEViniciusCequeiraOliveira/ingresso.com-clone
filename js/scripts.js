import { listaFilme } from "./filmes.js";
import { listaNoticias } from "./noticias.js";

const prev = document.querySelector('[prev-carousel]');
const next = document.querySelector('[next-carousel]');
const carrousel = document.querySelector('[carrosel-data]');
const noticias = document.querySelector('[noticias-data]');

function criarFilme(url, nome) {
    const filme = document.createElement('img');
    filme.className = 'my-carrosel';
    filme.src = url
    filme.alt = nome
   
    return filme
}

function criarNoticia(url, nome) {
    const noticias = document.createElement('div');
    
    noticias.className = 'my-noticias';

    noticias.innerHTML = `<img src="${url}"alt="${nome}"><h3>${nome}</h3>`

    return noticias
}

function prevCarousel() {
    carrousel.scrollLeft -= 250
}

function nextCarousel() {
    carrousel.scrollLeft += 250
}

listaFilme.forEach(filme => carrousel.appendChild(criarFilme(filme['url'], filme['nome'])));
listaNoticias.forEach(noticia => noticias.appendChild(criarNoticia(noticia['img'], noticia['titulo'])))

prev.addEventListener('click', () => prevCarousel())
next.addEventListener('click', () => nextCarousel())