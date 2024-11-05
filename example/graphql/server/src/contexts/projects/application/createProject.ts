import { Project, ProjectRepository } from '../domain';

export const createProject = async (
  project: Project,
  projectRepository: ProjectRepository,
) => {
  return await projectRepository.createProject(project);
};
