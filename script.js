const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn =document.getElementById('btn');
const clr =document.querySelector('.color');

btn.addEventListener('click', function(){
  //const randomNmuber=Math.floor((Math.random() * 4) + 1);
  const randomColor=getRandomColor()
  clr.innerHTML =randomColor;
  document.body.style.backgroundColor= randomColor
  //colors[randomNmuber];
})


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

