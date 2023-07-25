let linha = document.getElementById(`line`);

let atributo = document.getElementById(`attribute`);

linha.style.color = `red`;
linha.style.backgroundColor = `blue`;

atributo.style.boxShadow = `2px 2px 5px 1px blue`;

linha.style.cssText = `color: blue; border: 5px solid black;`;
atributo.setAttribute(`style`, `color: red; border: 1px solid blue;`)

console.log(linha.style);
console.log(window.getComputedStyle(linha));