import { ValidationError } from '../../../shared/errors/ValidationError';
import { ProjectRepository } from '../../projects';

import { Task, TaskInput } from '../domain/task.entity';
import { TaskRepository } from '../domain/task.repository';

export async function createTask(
  input: TaskInput,
  projectRepository: ProjectRepository,
  taskRepository: TaskRepository,
): Promise<Task | null> {
  const { name, description, projectId } = input;

  const projectExists = await projectRepository.getProjectById(projectId);
  if (!projectExists?.id) {
    throw new ValidationError(`Project with ID ${projectId} not found.`);
  }

  return await taskRepository.createTask({ name, description, projectId });
}
