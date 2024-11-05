import { Project } from '@prisma/client';

export interface ProjectRepository {
  getProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  createProject(project: Partial<Project>): Promise<Project>;
  updateProject(id: string, project: Partial<Project>): Promise<Project>;
  deleteProject(id: string): Promise<Project>;
  getProjectByTitle(title: string): Promise<Project[]>;
  getProjectsByUserId(userId: string): Promise<Project[]>;
}
