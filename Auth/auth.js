const jwt = require('jsonwebtoken')
const jwtSecret = 'a5adde7901c208e17cb7596a042af4eeef167c5a5a301a812080b739c0b5940ee52e91'
const bcrypt = require("bcryptjs")
const User = require("../model/User")
exports.adminAuth = (req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" })
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          next()
        }
      }
    })
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" })
  }
}
exports.register = async (req, res, next) => {
  const { username, password } = req.body
  bcrypt.hash(password, 10).then(async (hash) => {
    await User.create({
      username,
      password: hash,
    })
      .then((user) =>{
      
      const maxAge = 3*60*60;
      const token = jwt.sign({
        id : user._id,username,role:user.role },
        jwtSecret,
        {
            expiresIn: maxAge
        })
        res.cookie("jwt",token, {
          httpOnly : true,
          maxAge :maxAge*1000
        })
        res.status(200).json({
        message: "User successfully created",
        user,
        })
      })

      .catch((error) =>
        res.status(400).json({
          message: "User not successful created",
          error: error.message,
        })
      );
  });
};
  
  

exports.login = async (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({
      message: "Username or Password not present",
    })
  }
  try {
    const user = await User.findOne({ username})
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      })
    } else {
      bcrypt.compare(password,user.password).then(function(result){
        if(result){
          const maxAge = 3*60*60
          const token = jwt.sign(
            { id: user._id,username,role:user.role},
            jwtSecret,
            {
              expiresIn : maxAge

            }
          );
          res.cookie("jwt",token,{
            httpOnly : true,
            maxAge :maxAge*1000
          })
        
       
         res.status(201).json({
        message: "Login successful",
        user,
      })
    } else{
       res.status(400).json({message:"Login not successful"}) }
    })
  }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    })
  }
}
exports.update = async (req, res, next) => {
  const { role, id } = req.body;
  if (role && id) {
    if (role === "admin") {
      await User.findById(id)
        .then((user) => {
          if (user.role !== "admin") {
            user.role = role;
            user.save((err) => {
              if (err) {
                res
                  .status("400")
                  .json({ message: "An error occurred", error: err.message });
                process.exit(1);
              }
              res.status("201").json({ message: "Update successful", user });
            });
          } else {
            res.status(400).json({ message: "User is already an Admin" });
          }
        })
        .catch((error) => {
          res
            .status(400)
            .json({ message: "An error occurred", error: error.message });
        });
    }
  }
}
exports.deleteUser = async (req, res, next) => {
  const { id } = req.body
  await User.findById(id)
    .then(user => user.remove())
    .then(user =>
      res.status(201).json({ message: "User successfully deleted", user })
    )
    .catch(error =>
      res
        .status(400)
        .json({ message: "An error occurred", error: error.message })
    )
}
