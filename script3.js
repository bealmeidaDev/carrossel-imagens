const imagem = [
    "/imagem/imagem 1.jpg",
    "/imagem/imagem 2.jpg",
    "/imagem/imagem 3.webp",
    "/imagem/imagem 4.jpg",

];
let body = document.querySelector("body");

for (const item of imagem) {
        let imagem = document.createElement("img");
      imagem.src = item;
        body.appendChild(imagem);
        
}