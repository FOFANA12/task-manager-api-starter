import { StatusCodes } from "http-status-codes";
import ProjectRepository from "../repositories/ProjectRepository.js";

const repository = new ProjectRepository();

export default class ProjectController {
  // GET /projects
  index = (req, res) => {
    // TODO : appeler repository.findAll() et répondre 200 avec { data }
  };

  // GET /projects/:id
  show = (req, res) => {
    // TODO : repository.findById(id) → 200 { project }
  };

  // POST /projects
  create = (req, res) => {
    // TODO :
    // champs du body : name, description, status, startDate, dueDate
    // → 201 { message: 'Project has been successfully created', project }
  };

  // PUT /projects/:id
  update = (req, res) => {
    // TODO : → 200 { message: 'Project has been successfully updated', project }
  };

  // DELETE /projects/:id
  delete = (req, res) => {
    // TODO : → 200 { message, id }
  };

  #handleError = (res, error) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  };
}
