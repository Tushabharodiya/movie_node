require("dotenv").config();
let http = require("http")
let express = require("express");
const dbConnect = require("./db/dbconnect");
let cors = require("cors")
const routes = require("./routes");
const cookieParser = require("cookie-parser");
let app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));


// routes
app.use("/v1", routes)

// database connect
dbConnect()

// http server
http.createServer(app).listen(process.env.PORT, () => {
    console.log("server stated");
})