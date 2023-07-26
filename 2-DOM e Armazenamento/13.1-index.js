var para = document.createElement(`p`);
var node = document.createTextNode(`Esse é o para1`);

para.appendChild(node);

var parent = document.getElementById(`div1`);
parent.appendChild(para)

var para2 = document.createElement(`p`);
para2.innerHTML = `Esse é o para 2`;

var child = document.getElementById(`p1`);
parent.insertBefore(para2, child);

var para3 = document.createElement(`p`);
para3.textContent = `Esse é o para3`;

//parent.insertBefore(para3, child);

parent.replaceChild(para3, child)

//parent.removeChild(para2)