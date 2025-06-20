export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type TaskPriority = 'Low' | 'Medium' | 'High';

export type TaskStatus = 'To-Do' | 'In Progress' | 'Completed' | 'Incomplete';

export type TaskCategory = 
  | 'Work' 
  | 'Home' 
  | 'Personal' 
  | 'Shopping' 
  | 'Fitness' 
  | 'Finance' 
  | 'Others';

export type Task = {
  id: string;
  userId: string;
  title: string;
  description: string;
  dueDate: string;
  category: TaskCategory;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: string;
};

export type NotificationType = 'due-soon' | 'overdue' | 'status-update' | 'reminder';

export type Notification = {
  id: string;
  taskId: string;
  type: NotificationType;
  message: string;
  createdAt: string;
  read: boolean;
};

export const CATEGORIES: TaskCategory[] = [
  'Work',
  'Home',
  'Personal',
  'Shopping',
  'Fitness',
  'Finance',
  'Others'
];

export const PRIORITIES: TaskPriority[] = ['Low', 'Medium', 'High'];

export const STATUSES: TaskStatus[] = ['To-Do', 'In Progress', 'Completed', 'Incomplete'];