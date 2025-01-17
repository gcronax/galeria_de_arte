


function aplicaroscuro(){
  document.getElementById('pruebaid').href = 'clasese2.css';
}
function aplicarb(){
  document.getElementById('pruebaid').href = 'clasese.css';
}


var mains = document.getElementsByClassName("cuadro")

for (let i = mains.length - 1; i >= 10; i--) {
  mains[i].style.display = 'none';  // Ocultar el elemento
}



function vaciarWeb(){
//  window.location.reload();

  const input = document.querySelector("input").value;
  const input2=parseInt(input);
  console.log('numero es:', input);
  //for(let i = mains.length-1 ; i >= input2 ; i--){
    //let main = mains[mains.length-1];
    //main.remove(main)
  //}
  for (let i = 0; i < mains.length; i++) {
    mains[i].style.display = 'block';  // Hacer visible cada elemento

  }
  for (let i = mains.length - 1; i >= input2; i--) {
    mains[i].style.display = 'none';  // Ocultar el elemento
  }

}
