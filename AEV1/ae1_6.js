//6 Escribe el codigo de una funcion...

function pideEntero(){
    let temp = prompt("Introduce un numero entero (Se truncara si se introduce un numero no entero): ");
    return Math.trunc(temp);
}

function parImpar(numero){
    if(numero%2 == 0){
        console.log(numero + " es número par");
    }else{console.log(numero + " es número impar")}
}