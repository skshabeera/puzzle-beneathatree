const express = require("express")
const router = express.Router()
const { adminAuth } = require("../middleware/auth")
const { register  , login , update , deleteUser } = require("./auth")
router.route("/update").put(adminAuth, update)
router.route("/deleteUser").delete(adminAuth, deleteUser)
router.route("/register").post(register)
router.route("/login").post(login);
router.route("/update").put(update);
router.route("/deleteUser").delete(deleteUser);

module.exports = router
