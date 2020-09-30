function multipleFactorial(values=[]){
    const factorial = (number)=> (number <= 1) ? 1 : (number * factorial(number - 1));
    return values.map(factorial);
}
