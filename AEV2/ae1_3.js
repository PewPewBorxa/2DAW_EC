function findMinimum(values){
    const n1 = values[0];
    const minimo = values.reduce((n2, value) => Math.min(n2, value), n1);
    return minimo;
}