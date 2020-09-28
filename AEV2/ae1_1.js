const array = ["Ana",2,"JAvi",5,"Roberto",7,"Vanessa",10];

function deleteElemNoText(array){
    array = array.filter(name => typeof(name) == typeof("text"));
    console.log(array);
    return array;
}

function filterElem(array){
    const nuevoArray = array.filter(name => !(typeof(name) == typeof(1) && name%2 != 0));
    console.log(nuevoArray);
    return nuevoArray;
}
filterElem(array);