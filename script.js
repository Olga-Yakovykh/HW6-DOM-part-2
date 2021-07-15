let inp = document.querySelector('input');

let btn = document.querySelector('button');

btn.addEventListener('click', () => {

let result = inp.value;

document.querySelector('div').style.background = result;

});


let select = document.querySelector ('#selectedElement');
const figure = document.querySelector ('#wrapper');

select.addEventListener ('change', (event) => {

    figure.className = event.target.value;
})














