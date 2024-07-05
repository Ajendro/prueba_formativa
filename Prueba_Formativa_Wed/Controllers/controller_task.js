var Task = require('../Models/taskSchema'),
express=require('express'),
router=express.Router();


    exports.createTask = (req, res) => {
        const body = req.body;
        Task.insertMany({
            title: body.title,
            description: body.description,
            status: body.status,
            created_at: body.created_at || Date.now()
        })
        .then(() => {
            res.status(200).json('Datos Guardados');
            console.log("Successfully saved task to DB");
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('Error al guardar datos');
        });
    };
    
    exports.getAllTasks = (req, res) => {
        Task.find()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('Error al obtener datos');
        });
    };
    
    exports.getTaskById = (req, res) => {
        const taskId = req.params.id;
        Task.findById(taskId)
        .then(task => {
            if (!task) return res.status(404).json('Tarea no encontrada');
            res.status(200).json(task);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('Error al obtener datos');
        });
    };
    
    exports.updateTaskById = (req, res) => {
        const taskId = req.params.id;
        const body = req.body;
        Task.findByIdAndUpdate(taskId, {
            title: body.title,
            description: body.description,
            status: body.status
        }, { new: true })
        .then(task => {
            if (!task) return res.status(404).json('Tarea no encontrada');
            res.status(200).json('Datos Actualizados');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('Error al actualizar datos');
        });
    };
    
    exports.deleteTaskById = (req, res) => {
        const taskId = req.params.id;
        Task.findByIdAndDelete(taskId)
        .then(task => {
            if (!task) return res.status(404).json('Tarea no encontrada');
            res.status(200).json('Tarea Eliminada');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('Error al eliminar datos');
        });
    };
    
    exports.uploadFile = (req, res) => {
        if (!req.file) {
            return res.status(400).json('No file uploaded');
        }
        res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    };
    


    
