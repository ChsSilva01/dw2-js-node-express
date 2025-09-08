let temaCor = true;

function tema() {
    if(temaCor == true){
        document.querySelector("#tema").style.backgroundColor = "white";
        temaCor = false;    
    } else if (temaCor == false){
        document.querySelector("#tema").style.backgroundColor = "gray";
        temaCor = true; 
    } else {
        document.write("Algo de inesperado aconteceu");
    }
}
