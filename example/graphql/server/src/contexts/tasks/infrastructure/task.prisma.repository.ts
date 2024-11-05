
import { prisma } from '../../../database/database';
import { Task } from '../domain/task.entity';

import { TaskRepository } from '../domain/task.repository';

export const taskPrismaRepository: TaskRepository =  {


  createTask: async (task: Omit<Task, 'id'>) => {
    return await prisma.task.create({ data: task });
  },
  updateTask: async (id, task) => {
    return await prisma.task.update({
      where: {
        id,
      },
      data: task,
    });
  },
  deleteTask: async (id) => {
    return await prisma.task.delete({
      where: {
        id,
      },
    });
  },

};
