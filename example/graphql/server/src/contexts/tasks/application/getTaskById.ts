import { Task } from '../domain/task.entity';
import { TaskRepository } from '../domain/task.repository';

export const getTaskById = async (
  task: Task,
  taskRepository: TaskRepository,
) => {
  return await taskRepository.getTaskById(task.id);
};
