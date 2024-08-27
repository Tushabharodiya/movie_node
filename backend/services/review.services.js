const { reviewSchema } = require("../models")
const { getData, addData, deleteData } = require("../query/query")



let fetchReview = () => {
    return getData(reviewSchema)
}

let addReview = (body) => {
    return addData(reviewSchema, body)
}

let delete_review = (id) => {
    return deleteData(reviewSchema, id)
}


module.exports = { fetchReview, addReview, delete_review }