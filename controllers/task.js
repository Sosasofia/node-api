const Task = require("../models/tasks");

const create = async(req, res) => {
    const body = req.body;

    const newTask = new Task({
        title: body.title,
        description: body.description
    })

    const savedNote = await newTask.save();

    res.status(201).json(savedNote);
}

const findAll = async(req, res) => {
    try {
        let tasks = await Task.find();

        if(tasks.length == 0) {
            res.status(400).send({message: "Tasks not found"});
        } else {
            res.status(200).send({
                tasks
            })
        }
    } catch(e) {
        res.status(500).send({ message: err.message })
    }
}


module.exports = {
    create,
    findAll
}