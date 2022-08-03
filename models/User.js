const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        retuired:true
    },
    Email:{
        type:String,
        unique:true,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})
module.exports=user=mongoose.Model("user",userSchema)