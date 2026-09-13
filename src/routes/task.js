// Routes de la ressource Task.
// Une route = une méthode HTTP + une URL → une méthode du controller.
import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

const taskRouter = Router();
const controller = new TaskController();

// TODO : déclarer les 5 routes CRUD
// GET    /        → controller.index   (liste des tâches)
// GET    /:id     → controller.show    (détail d'une tâche)
// POST   /        → controller.create  (créer une tâche)
// PUT    /:id     → controller.update  (modifier une tâche)
// DELETE /:id     → controller.delete  (supprimer une tâche)
//

export default taskRouter;
