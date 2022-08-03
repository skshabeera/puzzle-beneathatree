const express = require("express")
const router = express.Router()
const { check ,validationResult } = require("express-validator")
const puzzleModel=require('../../models/Puzzle')

router.post("/",[
    check("questionNumber","questionNumber is required").isLength({min:1}),
    check("puzzleDescription","puzzleDescription is requied").not().isEmpty(),
    check("Answers","Answers is required").not().isEmpty(),
    check("Link","Link is required").not().isEmpty()

],
async(req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() })
    }
    try{
        console.log(req.body)
        
        let puzzle = new puzzleModel(req.body)
        const puzzleCreated = await puzzle.save()
        return res.status(201).send(puzzleCreated)
    }
    catch(err){
        console.error(err.message)
    } 
})
router.get("/",async(req,res)=>{
    try{
      const puzzlesData = await puzzleModel.find()
      res.send(puzzlesData)
    }catch(err){
        res.send(err.message)
    }
})
module.exports = router