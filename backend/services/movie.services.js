const { movieSchema } = require("../models")
const { getData, addData, deleteData, updateData, findById } = require("../query/query")


let fetch_movie = () => {
    return getData(movieSchema)
}

let add_movie = (body) => {
    return addData(movieSchema, body)
}

let delete_movie = (id) => {
    return deleteData(movieSchema, id)
}

let update_movie = (id, body) => {
    return updateData(movieSchema, id, body)
}

let findBy_Id=(id)=>{
    return findById(movieSchema,id)
}




module.exports = { fetch_movie, add_movie, delete_movie, update_movie,findBy_Id }