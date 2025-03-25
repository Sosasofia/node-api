require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./routes/tasks");
const app =  express();

app.use( express.urlencoded({ extended:true }));

const url = process.env.MONGODB_URI;

// Database 
mongoose.connect(url)
    .then(() => {
        console.log("Database connected")
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error.message);
    });


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use("/api", taskRouter);

app.listen(3000, () => {
    console.log("Listening in port 3000")
})