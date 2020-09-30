function ej6(users=[], blackListed=[]){
    return users.filter(a => blackListed.find(b => b != a));
    
}

/* paquito=["a","b","c"];
manolo=["b"];
console.log(ej6(paquito,manolo)); */
