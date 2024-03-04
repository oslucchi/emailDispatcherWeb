// export type TaskStatus = 'scheduled' | 'pending' | 'active' | 'completed' | 'error'; // Extend this as needed

export interface TaskType {
  id: number;
  description: string;
  status: string;
  lastEventTime?: Date;
}