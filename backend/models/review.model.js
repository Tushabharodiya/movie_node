let mongoose = require("mongoose")


let reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movieSchema",
    },
    desc: {
        type: String,
    }

})

let review = mongoose.model("reviewSchema", reviewSchema)

module.exports = review;