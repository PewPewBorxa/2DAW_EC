function ej6(users, blackListed){
    return users.filter(a => blackListed.find(b => b != a));
    
}

