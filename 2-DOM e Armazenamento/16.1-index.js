/* Window Object: size, open, close, move */
var newWindowObj = window.open("15-requestanimation.html", "newWindow", "menubar=true,location=true,resizable=false,scrollbars=false,width=400,height=300,top=200,left=200");

newWindowObj.addEventListener('resize', function(){update()});
var x = window.document.getElementById("demo");
update();

function update() {
  x.textContent = "Browser inner window width: " + 
  newWindowObj.innerWidth + ", height: " + newWindowObj.innerHeight + ".";
}


function move() {
  newWindowObj.moveBy(50,0);
  newWindowObj.focus();
}

var buttonClose = document.getElementById(`close`);
var buttonMove = document.getElementById(`move`)

buttonClose.addEventListener(`click`, function(){newWindowObj.close()}, false);
buttonMove.addEventListener(`click`, function(){move()}, false);