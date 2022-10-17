const express = require("express")
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./middleware/auth.js");
const app = express()
app.use(express.json())
app.use(cookieParser());


const connectDB = require("./db");
connectDB();
app.use("/api/auth", require("./Auth/route"))
app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/basic", userAuth, (req, res) => res.send("User Route"));

const PORT = 5000
const server =  app.listen(PORT, () => 
    console.log(`Server Connected to port ${PORT}`))
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})