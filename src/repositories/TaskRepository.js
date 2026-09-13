import Task from "../models/Task.js";

export default class TaskRepository {
  static tasks = [
    new Task({
      id: 1,
      title: "Créer la base de données",
      description: "Créer les tables principales du projet",
      status: "completed",
      priority: "high",
      dueDate: "2026-09-10",
      projectId: 1,
    }),

    new Task({
      id: 2,
      title: "Créer les modèles",
      description: "Créer les classes métier en JavaScript",
      status: "in-progress",
      priority: "high",
      dueDate: "2026-09-12",
      projectId: 1,
    }),

    new Task({
      id: 3,
      title: "Créer les repositories",
      description: "Centraliser les accès aux données",
      status: "todo",
      priority: "medium",
      dueDate: "2026-09-14",
      projectId: 1,
    }),

    new Task({
      id: 4,
      title: "Créer les routes API",
      description: "Créer les endpoints REST",
      status: "todo",
      priority: "medium",
      dueDate: "2026-09-16",
      projectId: 1,
    }),

    new Task({
      id: 5,
      title: "Tester l’API",
      description: "Vérifier les endpoints",
      status: "todo",
      priority: "low",
      dueDate: "2026-09-18",
      projectId: 1,
    }),
  ];

  findAll = () => {
    return TaskRepository.tasks;
  };

  findById = (id) => {
    // TODO : .find() sur Number(id), sinon throw Error('Task not found')
  };

  create = (data) => {
    // TODO : id = max des ids + 1, new Task({ id, ...data }), push, retourner la tâche
  };

  update = (id, data) => {
    // TODO : retrouver la tâche, mettre à jour ses champs, la retourner
  };

  delete = (id) => {
    // TODO : retrouver la tâche, la retirer avec .filter(), retourner true
  };
}
