function average(dataArray){
    if(dataArray.length == 0){return undefined}
    else{
    return dataArray.reduce((a, b) => (a + b)/dataArray.length);
    }
}