import { ProjectRepository } from '../../projects';
import { TaskRepository } from '../domain/task.repository';
import { createTask } from '../application';
import { inputTask, projectResponse, taskResponse } from '../mixtures/mixtures';


describe('createTask', () => {
  const projectRepository: jest.Mocked<ProjectRepository> = {
    getProjectById: jest.fn(),
    getProjects: jest.fn(),
    createProject: jest.fn(),
    updateProject: jest.fn(),
    deleteProject: jest.fn(),
    getProjectByTitle: jest.fn(),
    getProjectsByUserId: jest.fn(),
  };
  const taskRepository: jest.Mocked<TaskRepository> = {
    createTask: jest.fn(),
    updateTask: jest.fn(),
    deleteTask: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a task', async () => {
    taskRepository.createTask.mockResolvedValue(taskResponse);

    projectRepository.getProjectById.mockResolvedValue(projectResponse);

    const task = await createTask(inputTask, projectRepository, taskRepository);

    expect(projectRepository.getProjectById).toHaveBeenCalledTimes(1);
    expect(taskRepository.createTask).toHaveBeenCalledTimes(1);

    expect(task).toMatchObject({
      name: inputTask.name,
      description: inputTask.description,
      isDone: inputTask.isDone,
      projectId: inputTask.projectId,
    });
  });

  it("should throw an error if project doesn't exist ", async () => {
    projectRepository.getProjectById.mockResolvedValue(null);

    await expect(
      createTask(inputTask, projectRepository, taskRepository),
    ).rejects.toThrow(`Project with ID ${inputTask.projectId} not found.`);
  });
});
