import { Project } from "../../projects";

export interface Task {
  id: string;
  name: string;
  description?: string | null;  
  isDone: boolean;
  createdAt: Date;       
  updatedAt: Date;
  projectId: string;     
  project?: Project | null;     
}

export type TaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'project'>;