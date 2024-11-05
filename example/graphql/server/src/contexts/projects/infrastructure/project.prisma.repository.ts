import { ProjectRepository } from '../domain/project.repository';
import { prisma } from '../../../database/database';
import { Project } from '../domain/project.entity';

export const projectPrismaRepository: ProjectRepository =  {
  getProjects: async () => {
    return await prisma.project.findMany();
  },

  getProjectById: async (id) => {
    return await prisma.project.findUnique({
      where: {
        id,
      },
    });
  },
  createProject: async (project: Omit<Project, 'id'>) => {
    return await prisma.project.create({ data: project });
  },
  updateProject: async (id, project) => {
    return await prisma.project.update({
      where: {
        id,
      },
      data: project,
    });
  },
  deleteProject: async (id) => {
    return await prisma.project.delete({
      where: {
        id,
      },
    });
  },
  getProjectByTitle: async (title) => {
    return await prisma.project.findMany({
      where: {
        name: title,
      },
    });
  },
  getProjectsByUserId: async (userId) => {
    return await prisma.project.findMany({
      where: {
        userId,
      },
    });
  },
};
