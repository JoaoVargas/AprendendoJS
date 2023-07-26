var button = document.getElementById(`button1`)

function myMove() {
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
            elem.style.color = pos
        }
    }
}

button.addEventListener(`click`, function(){myMove()}, false)

var item = document.getElementById('item');
item.animate([
        { transform: 'scale(1)', background: 'red', opacity: 1, offset: 0 },
        { transform: 'scale(.5) rotate(180deg)', background: 'blue', opacity: 1, offset: 0.5 },
        { transform: 'scale(1) rotate(360deg)', background: 'red', opacity: 1, offset: 1 },
    ], {
        duration: 2000, //milliseconds
        easing: 'linear', //'linear', a bezier curve, etc.
        delay: 10, //milliseconds
        iterations: Infinity, //or a number
        direction: 'normal', //'normal', 'reverse', etc.
        fill: 'forwards' //'backwards', 'both', 'none', 'auto'
    }
);
