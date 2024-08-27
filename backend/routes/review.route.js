let express = require("express");
const { reviewController } = require("../controller");

let route = express.Router();

route.get("/get", reviewController.getReview);
route.post("/add", reviewController.createReview);
route.delete("/delete/:id",reviewController.deleteReview)


module.exports = route;