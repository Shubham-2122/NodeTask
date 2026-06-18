const promise = new Promise((resolve, reject) => {

    let success = true;

    if(!success){
        resolve("Success");
    }
    else{
        reject("Failed");
    }

});

promise
.then((data) => console.log(data))
.catch((err) => console.log(err));