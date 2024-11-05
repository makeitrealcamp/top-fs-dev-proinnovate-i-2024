export interface Project {
  id: string;
  name: string;
  description?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
