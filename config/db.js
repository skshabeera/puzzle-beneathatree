const mongoose= require("mongoose")
// const config = require('config')
const db = "mongodb+srv://Shabeera:Shabeera@puzzle.4b26e.mongodb.net/?retryWrites=true&w=majority"
const connectDB=async()=>{
    try{

        await mongoose.connect(db)
        console.log("MongoDB connected")

    }catch(err){
        console.error(err.message)
        process.exit(1)

    }
}
module.exports=connectDB
    