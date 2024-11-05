import { TaskRepository } from '../domain/task.repository';

export const getAllTasks = async (taskRepository: TaskRepository) => {
  return await taskRepository.getAllTasks();
};
