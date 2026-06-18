const fetchData = async () => {

    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        console.log(data);

    }catch(err){
        console.log(err);
    }

}

fetchData();