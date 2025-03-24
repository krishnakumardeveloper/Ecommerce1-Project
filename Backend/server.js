const express = require("express")
const app = express()
// .env use
const dotenv = require("dotenv")
const path = require("path")
dotenv.config({path: path.join(__dirname, "config", ".env")})
let final_port = process.env.PORT || 5300

// import 
const products = require("./routes/product");
const orders = require("./routes/order");
const connectDatabase = require("./config/connectionDatabase")
// const cors = require("cors")

// frontend connection
const cors = require("cors")
app.use(cors())

connectDatabase()
// connect frontend and backend

// middle wares
app.use(express.json())
app.use("/api/mgrk/",products);
app.use("/api/mgrk/", orders);



// server connection
app.listen(final_port, ()=>{
    console.log(`Server is Running PORT on ${process.env.PORT} in ${process.env.NODE_ENV}`); 
})
