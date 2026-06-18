function login(age){

    if(age < 18){
        throw new Error("Access Denied");
    }

    return "Welcome";
}

console.log(login(15));