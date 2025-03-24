const mongoose = require("mongoose")

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log(`MongoDB connected to host: `+ con.connection.host);
    }).catch(()=>{
        console.log("Not Connected DB");
    })     
}

module.exports = connectDatabase