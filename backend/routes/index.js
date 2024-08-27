let express = require("express")
let userRoute = require("./user.route");
let movieRoute = require("./movie.route");
let reviewRoute = require("./review.route")

let routes = express.Router();

routes.use("/user", userRoute);
routes.use("/movie", movieRoute);
routes.use("/review", reviewRoute);


module.exports = routes;