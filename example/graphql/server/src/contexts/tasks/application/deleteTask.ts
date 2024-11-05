import { TaskRepository } from '../domain/task.repository';

export const deleteTask = async (
  taskId: string,
  taskRepository: TaskRepository,
) => {
  return await taskRepository.deleteTask(taskId);
};
