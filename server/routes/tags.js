const router = require("express").Router();
const mongoose = require('mongoose');
const tagModel = require("../models/tags")

router.post("/", async (req, res) => {
    const newTag = new tagModel(req.body)
 try{
            const tag = await newTag.save();
     res.status(200).send(tag)
     console.log(tag)
        }
    catch(err){res.status(500).json(err)}
})

router.get("/", async (req, res) => {
 try{
            const tags = await tagModel.find();
     res.status(200).send(tags)
     console.log(tags)
        }
    catch(err){res.status(500).json(err)}
})

module.exports=router