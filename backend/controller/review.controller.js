const { reviewServices } = require("../services")



let getReview = async (req, res) => {
    try {

        let review = await reviewServices.fetchReview()
        res.status(200).json({
            message: "review get sucess",
            review,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let createReview = async (req, res) => {
    try {

        let body = req.body;

        let review = await reviewServices.addReview(body)

        res.status(201).json({
            message: "review added success",
            review,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



let deleteReview = async (req, res) => {
    try {

        let { id } = req.params;

        let review = await reviewServices.delete_review(id)

        res.status(200).json({
            message: "review delete success",
            review,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = { getReview, createReview, deleteReview }