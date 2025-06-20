import { User, Task } from '../types';

// Session Storage
export interface AuthSession {
  isAuthenticated: boolean;
  userId: string;
}

export const getAuthSession = (): AuthSession | null => {
  const session = localStorage.getItem('authSession');
  return session ? JSON.parse(session) : null;
};

export const setAuthSession = (session: AuthSession): void => {
  localStorage.setItem('authSession', JSON.stringify(session));
};

export const removeAuthSession = (): void => {
  localStorage.removeItem('authSession');
};

// User Storage
export const getUsers = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user: User): void => {
  const users = getUsers();
  localStorage.setItem('users', JSON.stringify([...users, user]));
};

export const findUserByEmail = (email: string): User | undefined => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

export const getCurrentUser = (): User | null => {
  const currentUser = localStorage.getItem('currentUser');
  return currentUser ? JSON.parse(currentUser) : null;
};

export const setCurrentUser = (user: User): void => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const removeCurrentUser = (): void => {
  localStorage.removeItem('currentUser');
};

// Task Storage
export const getTasks = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const getUserTasks = (userId: string): Task[] => {
  const tasks = getTasks();
  return tasks.filter(task => task.userId === userId);
};

export const saveTask = (task: Task): void => {
  const tasks = getTasks();
  localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
};

export const updateTask = (updatedTask: Task): void => {
  const tasks = getTasks();
  const updatedTasks = tasks.map(task => 
    task.id === updatedTask.id ? updatedTask : task
  );
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

export const deleteTask = (taskId: string): void => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};