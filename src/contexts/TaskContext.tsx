import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskCategory, TaskStatus, TaskPriority } from '../types';
import { getUserTasks, saveTask, updateTask, deleteTask } from '../utils/localStorage';
import { useAuth } from './AuthContext';

interface TaskContextType {
  tasks: Task[];
  addTask: (
    title: string, 
    description: string, 
    dueDate: string, 
    category: TaskCategory,
    status: TaskStatus,
    priority: TaskPriority
  ) => void;
  updateTaskItem: (task: Task) => void;
  removeTask: (taskId: string) => void;
  getTasksByCategory: (category: TaskCategory) => Task[];
  getTasksByStatus: (status: TaskStatus) => Task[];
  getTasksByPriority: (priority: TaskPriority) => Task[];
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { currentUser, isAuthenticated } = useAuth();

  useEffect(() => {
    if (currentUser && isAuthenticated) {
      const userTasks = getUserTasks(currentUser.id);
      setTasks(userTasks);
    } else {
      setTasks([]);
    }
  }, [currentUser, isAuthenticated]);

  const addTask = (
    title: string, 
    description: string, 
    dueDate: string, 
    category: TaskCategory,
    status: TaskStatus,
    priority: TaskPriority
  ): void => {
    if (!currentUser) return;

    const newTask: Task = {
      id: uuidv4(),
      userId: currentUser.id,
      title,
      description,
      dueDate,
      category,
      status,
      priority,
      createdAt: new Date().toISOString(),
    };

    saveTask(newTask);
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const updateTaskItem = (updatedTask: Task): void => {
    updateTask(updatedTask);
    setTasks(prevTasks => 
      prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task)
    );
  };

  const removeTask = (taskId: string): void => {
    deleteTask(taskId);
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const getTasksByCategory = (category: TaskCategory): Task[] => {
    return tasks.filter(task => task.category === category);
  };

  const getTasksByStatus = (status: TaskStatus): Task[] => {
    return tasks.filter(task => task.status === status);
  };

  const getTasksByPriority = (priority: TaskPriority): Task[] => {
    return tasks.filter(task => task.priority === priority);
  };

  return (
    <TaskContext.Provider value={{ 
      tasks, 
      addTask, 
      updateTaskItem, 
      removeTask,
      getTasksByCategory,
      getTasksByStatus,
      getTasksByPriority
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};