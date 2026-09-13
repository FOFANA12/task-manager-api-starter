import Project from "../models/Project.js";
import TaskRepository from "./TaskRepository.js";

export default class ProjectRepository {
  // Jeu de test
  static projects = [
    new Project({
      id: 1,
      reference: "PRJ-0001",
      name: "Task Manager",
      description: "Application de gestion de projets et de tâches",
      status: "in-progress",
      startDate: "2026-09-01",
      dueDate: "2026-10-15",
    }),

    new Project({
      id: 2,
      reference: "PRJ-0002",
      name: "Site e-commerce",
      description: "Développement d’une boutique en ligne",
      status: "planned",
      startDate: "2026-10-01",
      dueDate: "2026-12-15",
    }),

    new Project({
      id: 3,
      reference: "PRJ-0003",
      name: "API Bibliothèque",
      description: "API REST pour la gestion d’une bibliothèque",
      status: "completed",
      startDate: "2026-07-10",
      dueDate: "2026-08-20",
    }),

    new Project({
      id: 4,
      reference: "PRJ-0004",
      name: "Application RH",
      description: "Application de gestion des employés",
      status: "in-progress",
      startDate: "2026-08-15",
      dueDate: "2026-11-30",
    }),

    new Project({
      id: 5,
      reference: "PRJ-0005",
      name: "Plateforme de réservation",
      description: "Gestion des réservations et disponibilités",
      status: "planned",
      startDate: "2026-11-01",
      dueDate: "2027-01-15",
    }),

    new Project({
      id: 6,
      reference: "PRJ-0006",
      name: "Gestion de stock",
      description: "Application de suivi des produits et mouvements de stock",
      status: "in-progress",
      startDate: "2026-09-05",
      dueDate: "2026-10-30",
    }),

    new Project({
      id: 7,
      reference: "PRJ-0007",
      name: "Portfolio développeur",
      description: "Création d’un portfolio professionnel",
      status: "completed",
      startDate: "2026-06-01",
      dueDate: "2026-06-30",
    }),
  ];

  findAll = () => {
    // TODO : remplir p.tasks pour chaque projet, retourner le tableau
  };

  findById = (id) => {
    // TODO : .find() sur Number(id), sinon throw Error('Project not found'), remplir tasks
  };

  create = (data) => {
    // TODO : id = max des ids + 1, reference = `PRJ-${String(id).padStart(4, '0')}`,
    // new Project({ id, reference, ...data }), push, retourner le projet
  };

  update = (id, data) => {
    // TODO : retrouver le projet, mettre à jour ses champs (pas id ni reference), le retourner
  };

  delete = (id) => {
    // TODO : même logique que TaskRepository.delete
  };
}
