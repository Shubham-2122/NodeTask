const auth = (req, res, next) => {

    const isLogin = true;

    if(isLogin){

        next();

    } else {

        res.send("Please Login");

    }

};

module.exports = auth;