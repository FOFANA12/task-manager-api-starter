export default class Project {
  constructor({
    id = null,
    reference,
    name,
    description = null,
    status = "planned",
    startDate,
    dueDate,
  }) {
    this.id = id;
    this.reference = reference;
    this.name = name;
    this.description = description;
    this.status = status;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.tasks = [];
  }
}
