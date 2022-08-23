const router = require("express").Router();
const mongoose = require('mongoose');
const tagModel = require("../models/tags")

router.post("/", async (req, res) => {
    const newTag = new tagModel(req.body)
 try{
    const tag = await newTag.save();
     res.status(200).send(tag)
        return
        }
 catch (err) {
     res.status(500).json(err)
    return
 }
})




router.get("/", async (req, res) => {
 try{
            const tags = await tagModel.find();
     res.status(200).send(tags)
     return
        }
 catch (err) {
     res.status(500).json(err)

 }
})

module.exports=router