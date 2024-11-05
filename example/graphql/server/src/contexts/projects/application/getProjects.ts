import { ProjectRepository } from '../domain/project.repository';

export const getProjects = (projectRepository: ProjectRepository) => {
  try {
    return projectRepository.getProjects();
  } catch (error) {
    throw new Error(`Unable to fetch projects: ${error}`);
  }
};
