const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/controller_task.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/crear', taskController.createTask);
router.get('/listar', taskController.getAllTasks);
router.get('/obtener/:id', taskController.getTaskById);
router.put('/actualizar/:id', taskController.updateTaskById);
router.delete('/eliminar/:id', taskController.deleteTaskById);
router.post('/subir/:id', upload.single('file'), taskController.uploadFile);

module.exports = router;
