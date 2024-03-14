let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];

let button = document.getElementById('button');
let p = document.getElementById('p');
    let canvas = document.getElementById('canvas');

button.addEventListener('click', () => {
    let index = parseInt((Math.random() * colors.length) + 1);
    canvas.style.background = `${colors[index]}`
    p.style.color=`${colors[index]}`
})