
let getData = (schema) => {
    return schema.find()
}

let addData = (schema, body) => {
    return schema.create(body)
}

let deleteData = (schema, id) => {
    return schema.findByIdAndDelete(id)
}

let updateData = (schema, id, body) => {
    return schema.findByIdAndUpdate(id, body)
}

let findByEmail = (schema, email) => {
    return schema.findOne(email)
}

let findById = (schema, id) => {
    return schema.findById(id)
}


module.exports = { getData, addData, deleteData, updateData, findByEmail, findById }


