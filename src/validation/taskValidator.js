function validateTask(task) {
  const errors = [];

  if (
    !task.title ||
    typeof task.title !== "string" ||
    task.title.trim() === ""
  ) {
    errors.push("Title is required and must be a non-empty string.");
  }

  if (task.description && typeof task.description !== "string") {
    errors.push("Description must be a string.");
  }

  if (!task.dueDate || isNaN(Date.parse(task.dueDate))) {
    errors.push("DueDate is required and must be a valid date.");
  }

  const validStatuses = ["pending", "in-progress", "completed"];
  if (!task.status || !validStatuses.includes(task.status)) {
    errors.push(
      `Status is required and must be one of the following: ${validStatuses.join(
        ", "
      )}.`
    );
  }

  return errors.length > 0 ? errors.join(" ") : null;
}

module.exports = { validateTask };
