//8 Escribe la rutina de codigo...

do{
    var w = prompt("Introduce un numero del 1 al 12");
    if(w > 12 || w < 1){
        let alerta = "El numero introducido no es valido porque ";
        if(w > 12){alerta+="es mayor que 12";}
        if(w < 1){alerta+="es menor que 1";}
        alert(alerta);
    }
    }while(!(w >=1 && w <=12));
    
    function tira12(){
        return Math.floor((Math.random()*12)+1);
    }
    
    let ep = tira12();
    if(w == ep){alert("Has acertado el numero!!");}
    else{alert("No has acertado, pero puedes volver a intentarlo");}
    