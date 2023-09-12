const numeros = [1, 2, 3, 4, 5];

let body = document.querySelector("body");

const paragrafo = document.getElementById("pId");


for (const item of numeros) {
    paragrafo.textContent += item + ",";

     let botao = document.createAttribute ('button');
     botao.textContent = "item";
     body.appendChild(botao);

    
}