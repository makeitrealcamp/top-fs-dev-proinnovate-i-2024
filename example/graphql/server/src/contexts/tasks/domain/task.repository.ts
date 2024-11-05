import { Task } from "./task.entity";

export interface TaskRepository {
  createTask(Task: Partial<Task>): Promise<Task> | null;
  updateTask(id: string, Task: Partial<Task>): Promise<Task>;
  deleteTask(id: string): Promise<Task>;
  // getAllTasks(): Promise<Task[]>;
  // getTaskById(id: string): Promise<Task | null>;
  // getTasksByProjectId(ProjectId: string): Promise<Task[]>;
}
