import { Router } from "express";
import ProjectController from "../controllers/ProjectController.js";

const projectRouter = Router();
const controller = new ProjectController();

// TODO : déclarer les 5 routes CRUD (même logique que task.js)
// GET    /        → controller.index
// GET    /:id     → controller.show
// POST   /        → controller.create
// PUT    /:id     → controller.update
// DELETE /:id     → controller.delete

export default projectRouter;
