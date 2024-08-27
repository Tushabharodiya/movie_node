const { movieServices } = require("../services")
const uploadImage = require("../services/cloudnary.services")



let getMovie = async (req, res) => {
    try {

        let movie = await movieServices.fetch_movie()

        res.status(200).json({
            message: "movie get success",
            movie,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}


let addMovie = async (req, res) => {
    try {


        let body = req.body;
        let { path, originalname } = req.file;
        // console.log(path);

        let cloud = await uploadImage(path, originalname)
        // console.log(cloud);

        let newBody = {
            ...body,
            profile: cloud.url,
        }

        let movie = await movieServices.add_movie(newBody)

        res.status(201).json({
            message: "movie add success",
            movie,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let deleteMovie = async (req, res) => {
    try {

        let { id } = req.params;

        let result = await movieServices.findBy_Id(id)
        console.log(result);

        if (!result) {
            throw new Error("movie not found")
        }

        let movie = await movieServices.delete_movie(id)

        res.status(200).json({
            message: "movie delete success",
            movie,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}


let updateMovie = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;
        let { path, originalname } = req.file;
        // console.log(path);

        let cloud = await uploadImage(path, originalname)
        let newbody = {
            ...body,
            profile: cloud.url,
        }

        let movie = {
            id,
            ...newbody
        }

        let data = await movieServices.update_movie(id, newbody)

        res.status(200).json({
            message: "movie update success",
            movie,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}


module.exports = { getMovie, addMovie, deleteMovie, updateMovie }