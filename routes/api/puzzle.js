const express = require("express")
const router = express.Router()
const { validationResult } = require("express-validator")
const Puzzle=require('../../models/Puzzle')
const {check,validationResult}=require("express-validator")

router.post('/',[
    check("questionNumber","questionNumber is required").isLength({min:2}),
    check("puzzleDescription","puzzleDescription is requied").not().isEmpty(),
    check("Answers","Answers is required").not().isEmpty(),
    check("Link","Link is required").not().isEmpty()

],
async(req,res)=>{

    


    


})