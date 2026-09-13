export default class Task {
  constructor({
    id = null,
    title,
    description = null,
    status = "todo",
    priority = "medium",
    dueDate,
    projectId,
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.dueDate = dueDate;
    this.projectId = projectId;
  }
}
