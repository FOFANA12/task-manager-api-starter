// Routeur principal : regroupe les routeurs de chaque ressource.
import { Router } from "express";
import taskRouter from "./task.js";
import projectRouter from "./project.js";

const appRouter = Router();

appRouter.use('/tasks', taskRouter);
appRouter.use('/projects', projectRouter);

export default appRouter;
