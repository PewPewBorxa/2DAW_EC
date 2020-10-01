function findGreaterThan(x,values){
    const mayorque = (number)=> number > x;
    return values.every(mayorque);
}