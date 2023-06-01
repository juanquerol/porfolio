let uno = document.getElementById("circulo1")
let dos = document.getElementById("circulo2")
let tres = document.getElementById("circulo3")
let cuatro = document.getElementById("circulo4")
let cinco = document.getElementById("circulo5")
let masV = document.getElementById("mas")
let menosV = document.getElementById("menos")

let cont =0;
let intervaloMas;
let intervaloMenos;
let intervalo1
let intervalo2
let intervalo3
let intervalo4
let intervalo5
uno.style.transform="translateX(-50%)";
dos.style.transform="translateX(-50%)";
tres.style.transform="translateX(-50%)";
cuatro.style.transform="translateX(-50%)";
cinco.style.transform="translateX(-50%)";
uno.style.display="none";
dos.style.display="none";
tres.style.display="none";
cuatro.style.display="none";
cinco.style.display="none";
masV.addEventListener("click", masF)
menosV.addEventListener("click", menosF)
uno.addEventListener("click", presionarUno);
dos.addEventListener("click", presionarDos);
tres.addEventListener("click", presionarTres);
cuatro.addEventListener("click", presionarCuatro);
cinco.addEventListener("click", presionarCinco);
masV.style.display="none";
menosV.style.display="block";
function menosF(){
    menosV.style.display="none";
    masV.style.display="block";
    document.getElementById("explicacion").innerHTML="selecione un apartado del CV";
    intervaloMas = setInterval(posicionMas, 50);
}
function masF(){
    masV.style.display="none";
    menosV.style.display="block";
    document.getElementById("explicacion").innerHTML="haz click en el boton mas para ver los apartados del CV";
    intervaloMenos = setInterval(posicionMenos, 50);
    
}
function blanco(){
  document.getElementById("texto1").style.color="rgb(255, 255, 255)"
  document.getElementById("texto2").style.color="rgb(255, 255, 255)"
  document.getElementById("texto3").style.color="rgb(255, 255, 255)"
  document.getElementById("texto4").style.color="rgb(255, 255, 255)"
  document.getElementById("texto5").style.color="rgb(255, 255, 255)"
}
function presionarUno(){
  blanco();
  intervalo1 = setInterval(funcionUno, 50);
}
function presionarDos(){
  blanco();
  intervalo2 = setInterval(funcionDos, 50);
}
function presionarTres(){
  blanco();
  intervalo3 = setInterval(funcionTres, 50);
}
function presionarCuatro(){
  blanco();
  intervalo4 = setInterval(funcionCuatro, 50);
}
function presionarCinco(){
  blanco();
  intervalo5 = setInterval(funcionCinco, 50);
}

function posicionMas(){
    if (getComputedStyle(uno).display === "none") {
        uno.style.display = "block";
        uno.style.left = "67%";
        uno.style.top = "50%";
      } else if (getComputedStyle(dos).display === "none" && getComputedStyle(uno).display === "block") {
        uno.style.display = "block";
        uno.style.left = "67%";
        uno.style.top = "15%";
        dos.style.display = "block";
        dos.style.left = "67%";
        dos.style.top = "50%";
      } else if (getComputedStyle(tres).display === "none" && getComputedStyle(dos).display === "block") {
        uno.style.display = "block";
        uno.style.left = "50%";
        uno.style.top = "0%";
        dos.style.display = "block";
        dos.style.left = "67%";
        dos.style.top = "15%";
        tres.style.display = "block";
        tres.style.left = "67%";
        tres.style.top = "50%";
      } else if (getComputedStyle(cuatro).display === "none" && getComputedStyle(tres).display === "block") {
        uno.style.display = "block";
        uno.style.left = "33%";
        uno.style.top = "15%";
        dos.style.display = "block";
        dos.style.left = "50%";
        dos.style.top = "0%";
        tres.style.display = "block";
        tres.style.left = "67%";
        tres.style.top = "15%";
        cuatro.style.display = "block";
        cuatro.style.left = "67%";
        cuatro.style.top = "50%";
      } else if (getComputedStyle(cinco).display === "none" && getComputedStyle(cuatro).display === "block") {
        uno.style.display = "block";
        uno.style.left = "33%";
        uno.style.top = "50%";
        dos.style.display = "block";
        dos.style.left = "33%";
        dos.style.top = "15%";
        tres.style.display = "block";
        tres.style.left = "50%";
        tres.style.top = "0%";
        cuatro.style.display = "block";
        cuatro.style.left = "67%";
        cuatro.style.top = "15%";
        cinco.style.display = "block";
        cinco.style.left = "67%";
        cinco.style.top = "50%";
        clearInterval(intervaloMas);
      }
      
}
function posicionMenos(){
    if (getComputedStyle(cinco).display === "block") {
        uno.style.display = "block";
        uno.style.left = "33%";
        uno.style.top = "15%";
        dos.style.display = "block";
        dos.style.left = "50%";
        dos.style.top = "0%";
        tres.style.display = "block";
        tres.style.left = "67%";
        tres.style.top = "15%";
        cuatro.style.display = "block";
        cuatro.style.left = "67%";
        cuatro.style.top = "50%";
        cinco.style.display = "none";
        
        
      } else if (getComputedStyle(cinco).display === "none" && getComputedStyle(cuatro).display === "block") {
        uno.style.display = "block";
        uno.style.left = "50%";
        uno.style.top = "0%";
        dos.style.display = "block";
        dos.style.left = "67%";
        dos.style.top = "15%";
        tres.style.display = "block";
        tres.style.left = "67%";
        tres.style.top = "50%";
        cuatro.style.display = "none";
      } else if (getComputedStyle(cuatro).display === "none" && getComputedStyle(tres).display === "block") {
        uno.style.display = "block";
        uno.style.left = "67%";
        uno.style.top = "15%";
        dos.style.display = "block";
        dos.style.left = "67%";
        dos.style.top = "50%";
        tres.style.display = "none";
        
      } else if (getComputedStyle(tres).display === "none" && getComputedStyle(dos).display === "block") {
        uno.style.display = "block";
        uno.style.left = "67%";
        uno.style.top = "50%";
        dos.style.display = "none";
        
      } else if (getComputedStyle(dos).display === "none" && getComputedStyle(uno).display === "block") {
        uno.style.display = "none";
        
        clearInterval(intervaloMenos);
      }
      
}
function funcionUno(){ 
  
  if(cont==0){
    uno.style.transform=" scale(2)";
  }
  if(cont==1){
    uno.style.transform=" scale(3)";
  }
  if(cont==2){
    uno.style.transform=" scale(4)";
  }
  if(cont==3){
    uno.style.transform=" scale(5)";
  }
  if(cont==4){
    uno.style.transform=" scale(6)";
  }
  if(cont==5){
    uno.style.transform=" scale(7)";
  }
  if(cont==6){
    uno.style.transform=" scale(8)";
  }
  if(cont==7){
    uno.style.transform=" scale(9)";
  }
  if(cont==8){
    uno.style.transform=" scale(10)";
    window.location.href="Idiomas.html";
    clearInterval(intervalo1)
  }
  
  
  cont++;
}
function funcionDos(){ 
  
  if(cont==0){
    dos.style.transform=" scale(2)";
  }
  if(cont==1){
    dos.style.transform=" scale(3)";
  }
  if(cont==2){
    dos.style.transform=" scale(4)";
  }
  if(cont==3){
    dos.style.transform=" scale(5)";
  }
  if(cont==4){
    dos.style.transform=" scale(6)";
  }
  if(cont==5){
    dos.style.transform=" scale(7)";
  }
  if(cont==6){
    dos.style.transform=" scale(8)";
  }
  if(cont==7){
    dos.style.transform=" scale(9)";
  }
  if(cont==8){
    dos.style.transform=" scale(10)";
    window.location.href="estudios.html";
    clearInterval(intervalo2);
  }
  
  
  cont++;
}
function funcionTres(){ 
  
  if(cont==0){
    tres.style.transform=" scale(2)";
  }
  if(cont==1){
    tres.style.transform=" scale(3)";
  }
  if(cont==2){
    tres.style.transform=" scale(4)";
  }
  if(cont==3){
    tres.style.transform=" scale(5)";
  }
  if(cont==4){
    tres.style.transform=" scale(6)";
  }
  if(cont==5){
    tres.style.transform=" scale(7)";
  }
  if(cont==6){
    tres.style.transform=" scale(8)";
  }
  if(cont==7){
    tres.style.transform=" scale(9)";
  }
  if(cont==8){
    tres.style.transform=" scale(10)";
    window.location.href="contactos.html";
    clearInterval(intervalo3)
  }
  
  
  cont++;
}
function funcionCuatro(){ 
  
  if(cont==0){
    cuatro.style.transform=" scale(2)";
  }
  if(cont==1){
    cuatro.style.transform=" scale(3)";
  }
  if(cont==2){
    cuatro.style.transform=" scale(4)";
  }
  if(cont==3){
    cuatro.style.transform=" scale(5)";
  }
  if(cont==4){
    cuatro.style.transform=" scale(6)";
  }
  if(cont==5){
    cuatro.style.transform=" scale(7)";
  }
  if(cont==6){
    cuatro.style.transform=" scale(8)";
  }
  if(cont==7){
    cuatro.style.transform=" scale(9)";
  }
  if(cont==8){
    cuatro.style.transform=" scale(10)";
    window.location.href="habilidades.html";
    clearInterval(intervalo4);
  }
  
  
  cont++;
}
function funcionCinco(){ 
  
  if(cont==0){
    cinco.style.transform=" scale(2)";
  }
  if(cont==1){
    cinco.style.transform=" scale(3)";
  }
  if(cont==2){
    cinco.style.transform=" scale(4)";
  }
  if(cont==3){
    cinco.style.transform=" scale(5)";
  }
  if(cont==4){
    cinco.style.transform=" scale(6)";
  }
  if(cont==5){
    cinco.style.transform=" scale(7)";
  }
  if(cont==6){
    cinco.style.transform=" scale(8)";
  }
  if(cont==7){
    cinco.style.transform=" scale(9)";
  }
  if(cont==8){
    cinco.style.transform=" scale(10)";
    window.location.href="cualidades.html";
    clearInterval(intervalo5);
  }
  
  
  cont++;
}