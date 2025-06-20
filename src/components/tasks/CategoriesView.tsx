import React from 'react';
import { 
  Briefcase, 
  Home, 
  User, 
  ShoppingCart, 
  Dumbbell, 
  Wallet, 
  Plus 
} from 'lucide-react';
import { useTasks } from '../../contexts/TaskContext';
import { TaskCard } from './TaskCard';
import { TaskCategory } from '../../types';

const categoryIcons: Record<TaskCategory, React.ElementType> = {
  'Work': Briefcase,
  'Home': Home,
  'Personal': User,
  'Shopping': ShoppingCart,
  'Fitness': Dumbbell,
  'Finance': Wallet,
  'Others': Plus
};

export const CategoriesView: React.FC = () => {
  const { tasks } = useTasks();

  const tasksByCategory = tasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = [];
    }
    acc[task.category].push(task);
    return acc;
  }, {} as Record<TaskCategory, typeof tasks>);

  return (
    <div className="space-y-8 animate-fade-in">
      {Object.entries(tasksByCategory).map(([category, categoryTasks]) => {
        const Icon = categoryIcons[category as TaskCategory];
        
        return (
          <div key={category} className="glass-effect rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-800/50 p-6 hover-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {categoryTasks.length} {categoryTasks.length === 1 ? 'task' : 'tasks'}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {categoryTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>

            {categoryTasks.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                No tasks in this category
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};