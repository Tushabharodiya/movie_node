let express = require("express");
const { movieController } = require("../controller");
const upload = require("../middleware/upload");


let route = express.Router();

route.get("/get", movieController.getMovie);
route.post("/add", upload.single("profile"), movieController.addMovie);
route.delete("/delete/:id", movieController.deleteMovie);
route.put("/update/:id",upload.single("profile"), movieController.updateMovie)


module.exports = route;