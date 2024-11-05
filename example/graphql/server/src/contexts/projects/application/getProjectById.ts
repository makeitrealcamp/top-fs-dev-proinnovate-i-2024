import { ProjectRepository } from '../domain/project.repository';

export const getProjectById = (
  id: string,
  projectRepository: ProjectRepository,
) => {
  try {
    return projectRepository.getProjectById(id);
  } catch (error) {
    throw new Error(`Unable to fetch project: ${error}`);
  }
};
