const express = require("express");
const mongoose = require('mongoose');
const dotenv= require("dotenv")
const PORT = 1113
const app = express()

const tagRoute=require("./routes/tags")

dotenv.config()

app.use(express.json())

main().catch(err => console.log(err));

async function main() {
    mongoose.connect(process.env.MONGODB_CODE);
    console.log("DB Connected")
}



app.get("/", (req, res) => {
    res.send("Hello")
})

app.use("/route/tags",tagRoute)

app.listen(PORT, function () {
    console.log("Server Listening");
})