//Syntax: element.addEventListener(event, function, useCapture);

let myP = document.getElementById(`myP`);
let myDiv = document.getElementById(`myDiv`);
let myP2 = document.getElementById(`myP2`);
let myDiv2 = document.getElementById(`myDiv2`);

myP.addEventListener(`click`, function(){myDiv.style.background = `lightblue`});

function changeText() {
    myP2.textContent =  "According to a Cornell publication, the answer is ~700 pounds.";
}
myP.addEventListener(`click`, changeText, false);

function changeText2(obj) {
    obj.textContent = obj.textContent += "THE REAL ANSWER.";
};
myDiv.addEventListener("click", function(){changeText2(myP2)}, false);

myDiv.addEventListener("mouseover", function(){ myDiv2.style.background = "darkkhaki" });

//myP.removeEventListener("click", changeText, false);