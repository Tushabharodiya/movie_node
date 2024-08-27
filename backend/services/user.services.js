const { userSchema } = require("../models")
const { getData, addData, deleteData, updateData, findByEmail, findById } = require("../query/query")


let fetchUser = () => {
    return getData(userSchema)
}


let postUser = (body) => {
    return addData(userSchema, body)
}

let delete_user = (id) => {
    return deleteData(userSchema, id)
}

let update_user = (id, body) => {
    return updateData(userSchema, id, body)
}

let findBy_Email = (email) => {
    return findByEmail(userSchema, { email })
}

let findBy_Id = (id) => {
    return findById(userSchema, id)
}

module.exports = { fetchUser, postUser, delete_user, update_user, findBy_Email, findBy_Id }