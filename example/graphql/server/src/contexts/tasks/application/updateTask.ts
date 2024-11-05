import { Task } from "../domain/task.entity";
import { TaskRepository } from "../domain/task.repository";

export const updateTask = async (task: Task, taskRepository: TaskRepository, ) => {
  return await taskRepository.updateTask(task.id, task);
};
