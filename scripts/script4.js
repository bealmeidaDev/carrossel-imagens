const imagens = [
    "/imagem/imagem 1.jpg",
    "/imagem/imagem 2.jpg",
    "/imagem/imagem 3.webp",
    "/imagem/imagem 4.jpg",

];

let imagem= document.querySelector("img")
let indice = 0;

imagem.src = imagens[indice];

function avancar() {
if (indice < 3) {
    indice++;
} else {
    indice = 0;
}
   

    imagem.src = imagens[indice];
}

function voltar() {
    console.log("teste voltar")
}