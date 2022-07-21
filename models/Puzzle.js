const mongoose= require("mongoose")
const puzzleSchema = new mongoose.Schema({
    questionNumber:{
        type:Number,
        required:true,
        Unique:true
    },
    puzzleDescription:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    link:{
        type:String,
    }
})
module.exports=Puzzle=mongoose.model("puzzle",puzzleSchema)