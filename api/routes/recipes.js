const express = require('express')
const recipesModel = require('../models/recipes')

const router = express.Router()

router.get('/recipes', async (req,res,next)=>{

    try{
        const recipes = await recipesModel.find()
        res.status(200).json(recipes)
    }
    catch(err){next(err)}

})

module.exports = router