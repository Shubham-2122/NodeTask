const test = async () => {

    try{

        const data = await fetch("wrong-url");

    }catch(err){

        console.log("API Error");

    }

}

test();