const Mongoose = require("mongoose")
const localDB = "mongodb+srv://Shabeera:Shabeera@puzzle.4b26e.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB