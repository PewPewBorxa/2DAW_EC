//3 Dado el siguiente conjunto de elementos...

const values = [true, false, 5, "hola", [1,2,3], {age:2,gender:'male'}];
for(i=0;i<values.length;i++){
console.log(values[i]+" es de tipo: " + typeof values[i]);
}
