let jwt = require("jsonwebtoken")



let createToken = (data) => {
    let token = jwt.sign(data, process.env.SECRET)
    return token;
}


let isLogin = ([...role]) => {
    try {

        return (req, res, next) => {
            let token = req.headers['authorization'].split(' ')[1]
            // console.log(token, "ASdasdasdads");
            // let token = req.cookies["token"];x
            if (!token) {
                throw new Error("you are not login")
            }
            let user = jwt.verify(token, process.env.SECRET);
            // console.log(user.user.role,"sdnddbhbkbbj");

            if (!role.includes(user.user.role)) {
                throw new Error("you are unauthorised");
            }
            req.user = user;
            // console.log(req.user,"jdbcdbshbc");
            next();
        };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createToken, isLogin }