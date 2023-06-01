let intervalo;
let cont=0;
document.getElementById("volver").addEventListener("click", presionarVolver);
function presionarVolver(){
    document.getElementById("textoVolver").style.color="black";
    intervalo = setInterval(funcionVolver, 50);
}
function funcionVolver(){ 
  
    if(cont==0){
        document.getElementById("volver").style.transform=" scale(2)";
    }
    if(cont==1){
        document.getElementById("volver").style.transform=" scale(4)";
    }
    if(cont==2){
        document.getElementById("volver").style.transform=" scale(6)";
    }
    if(cont==3){
        document.getElementById("volver").style.transform=" scale(8)";
    }
    if(cont==4){
        document.getElementById("volver").style.transform=" scale(10)";
    }
    if(cont==5){
        document.getElementById("volver").style.transform=" scale(12)";
    }
    if(cont==6){
        document.getElementById("volver").style.transform=" scale(14)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(916)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(18)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(20)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(22)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(24)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(26)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(30)";
    }

    if(cont==7){
        document.getElementById("volver").style.transform=" scale(32)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(34)";
    }
    if(cont==7){
        document.getElementById("volver").style.transform=" scale(36)";
    }if(cont==7){
        document.getElementById("volver").style.transform=" scale(38)";
    }

    if(cont==8){
        document.getElementById("volver").style.transform=" scale(40)";
      window.location.href="index.html";
      clearInterval(intervalo)
    }
    
    
    cont++;
}