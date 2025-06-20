import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTasks } from '../../contexts/TaskContext';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { CATEGORIES, PRIORITIES, STATUSES, TaskCategory, TaskPriority, TaskStatus } from '../../types';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    category: TaskCategory;
    status: TaskStatus;
    priority: TaskPriority;
  };
}

export const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || '');
  const [category, setCategory] = useState<TaskCategory>(initialData?.category || 'Personal');
  const [status, setStatus] = useState<TaskStatus>(initialData?.status || 'To-Do');
  const [priority, setPriority] = useState<TaskPriority>(initialData?.priority || 'Medium');
  
  const { addTask, updateTaskItem } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title) return;
    
    if (initialData) {
      updateTaskItem({
        ...initialData,
        title,
        description,
        dueDate,
        category,
        status,
        priority,
      });
    } else {
      addTask(title, description, dueDate, category, status, priority);
    }
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {initialData ? 'Edit Task' : 'Add New Task'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500 dark:text-gray-400"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 max-h-[calc(90vh-4rem)] bg-white dark:bg-gray-900">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              required
              darkMode
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description (optional)"
                className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              />
            </div>
            
            <Input
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              darkMode
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value as TaskCategory)}
                options={CATEGORIES.map(cat => ({ value: cat, label: cat }))}
                darkMode
              />
              
              <Select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value as TaskStatus)}
                options={STATUSES.map(status => ({ value: status, label: status }))}
                darkMode
              />
              
              <Select
                label="Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as TaskPriority)}
                options={PRIORITIES.map(priority => ({ value: priority, label: priority }))}
                required
                darkMode
              />
            </div>
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button 
                variant="outline" 
                type="button" 
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button type="submit">
                {initialData ? 'Save Changes' : 'Add Task'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};