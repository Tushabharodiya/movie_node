let mongoose = require("mongoose")

let movieSchema = new mongoose.Schema({
    profile: {
        type: String,
    },
    title: {
        type: String,
    },
    director: {
        type: String,
    },
    genre: {
        type: String,
    },
    casting: {
        type: String,
    },
    year: {
        type: String,
    }
})


let movie = mongoose.model("movieSchema", movieSchema)

module.exports = movie;


