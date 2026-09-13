import { StatusCodes } from "http-status-codes";
import TaskRepository from "../repositories/TaskRepository.js";

const repository = new TaskRepository();

export default class TaskController {
  // GET /tasks
  index = (req, res) => {
    // TODO : appeler repository.findAll() et répondre 200 avec { data }
  };

  // GET /tasks/:id
  show = (req, res) => {
    // TODO : repository.findById(id) → 200 { task }
  };

  // POST /tasks
  create = (req, res) => {
    // TODO :
    // champs du body : title, description, status, priority, dueDate, projectId
    // → 201 { message: 'Task has been successfully created', task }
  };

  // PUT /tasks/:id
  update = (req, res) => {
    // TODO : → 200 { message: 'Task has been successfully updated', task }
  };

  // DELETE /tasks/:id
  delete = (req, res) => {
    // TODO : → 200 { message, id }
  };

  #handleError = (res, error) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  };
}
