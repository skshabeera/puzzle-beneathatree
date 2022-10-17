const express= require("express")
const router = express.Router()
const {check,validationResult} = require("express-validator")
const userModel = require("../../models/User")
router.post('/'[
    check("Name","Name is required").not().isEmpty(),
    check("Email","Email isrequired").not().isEmpty(),
    check("Password","Password is required").isLength({min:1, max:10})
],
async(req,res)=>{
    const errors = validationResult(req.body)
    if(!errors.isEmpty()){
        return req.status(400).send({errors:errors.array()})

    }
    try{
        let user = userModel(req.body)
        const puzzleCreated = await puzzle.save()
        return res.status(201).send(puzzleCreated)
    }
    catch(err){
        console.error(err.message)
    } 
})