import React, { useState } from 'react';
import { Edit2, Trash2, CheckCircle, Circle, Clock, AlertTriangle } from 'lucide-react';
import { Task, TaskCategory, TaskStatus, TaskPriority } from '../../types';
import { useTasks } from '../../contexts/TaskContext';
import { TaskModal } from './TaskModal';
import { cn } from '../../utils/cn';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { updateTaskItem, removeTask } = useTasks();

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleStatusChange = (newStatus: TaskStatus) => {
    const updatedTask = { ...task, status: newStatus };
    updateTaskItem(updatedTask);
  };

  const getStatusIcon = () => {
    switch (task.status) {
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'In Progress':
        return <Clock className="h-5 w-5 text-orange-500" />;
      case 'Incomplete':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: TaskPriority): string => {
    const colors = {
      'High': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
      'Medium': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
      'Low': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
    };
    return colors[priority];
  };

  const getCategoryColor = (category: TaskCategory): string => {
    const colors: Record<TaskCategory, string> = {
      'Work': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
      'Home': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
      'Personal': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      'Shopping': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
      'Fitness': 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400',
      'Finance': 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400',
      'Others': 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400'
    };
    return colors[category];
  };

  return (
    <>
      <div className={cn(
        "bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800",
        "hover:shadow-md transition-shadow duration-200",
        task.status === 'Completed' && "opacity-75"
      )}>
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <button 
                onClick={() => {
                  const statusOrder: TaskStatus[] = ['To-Do', 'In Progress', 'Completed', 'Incomplete'];
                  const currentIndex = statusOrder.indexOf(task.status);
                  const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
                  handleStatusChange(nextStatus);
                }}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1 transition-colors"
              >
                {getStatusIcon()}
              </button>
              <h3 className={cn(
                "font-medium text-lg",
                task.status === 'Completed' ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"
              )}>
                {task.title}
              </h3>
            </div>
            
            {task.description && (
              <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{task.description}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {task.dueDate && (
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{formatDate(task.dueDate)}</span>
                </div>
              )}
              
              <span className={cn(
                "px-2 py-1 rounded-full text-xs font-medium",
                getCategoryColor(task.category)
              )}>
                {task.category}
              </span>

              <span className={cn(
                "px-2 py-1 rounded-full text-xs font-medium",
                getPriorityColor(task.priority)
              )}>
                {task.priority} Priority
              </span>
            </div>
          </div>
          
          <div className="flex items-start space-x-1">
            <button 
              onClick={() => setIsEditing(true)}
              className="p-1.5 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
            >
              <Edit2 className="h-4 w-4" />
            </button>
            <button 
              onClick={() => removeTask(task.id)}
              className="p-1.5 text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <TaskModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        initialData={task}
      />
    </>
  );
};