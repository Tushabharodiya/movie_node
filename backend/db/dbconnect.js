let mongoose = require("mongoose")


let dbConnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("database connect suucesss");
    })
}


module.exports = dbConnect;
