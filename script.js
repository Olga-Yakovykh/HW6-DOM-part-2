
const select = document.querySelector('.selectedElement');
let selectOption = document.querySelector('.selectedElement').value;
let figure = document.querySelector('div');



select.addEventListener('change', function () {
    let style1 = this.value === 'square' ? 'display' : 'none'; 
    document.getElementById('resultSquare').style.display = style1;
    let style2 = this.value === 'rectangle' ? 'display' : 'none';
    document.getElementById('resultRectangle').style.display = style2;
    let style3 = this.value === 'circle' ? 'display' : 'none';
    document.getElementById('resultCircle').style.display = style3;
  
});

function myFunction() {
    document.getElementById("myInp").value = "red";
  }



document.getElementById('btn').onclick = function (){

let color = document.getElementById("myInp").value;

   if (color === 'red') {
    figure.style.backgroundColor = "#ff0000";       
   }
   else {
    figure.style.backgroundColor = "#00000";
   }
};









