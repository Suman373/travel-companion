const express = require("express");
const mongoose = require('mongoose');
const dotenv= require("dotenv")
const PORT = 8113
const app = express()

const tagRoute = require("./routes/tags")
const userRoute= require("./routes/users")

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

app.use("/route/tags", tagRoute)
app.use("/route/users",userRoute)

app.listen(PORT, function () {
    console.log("Server Listening");
})