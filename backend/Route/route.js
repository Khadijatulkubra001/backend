import express from 'express';
import { getProject, addProject, getProjectById, updateProject, deleteProject } from '../Controller/Project.controller.js';

const router = express.Router();

router.get('/', getProject);
router.post('/add', addProject);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;

