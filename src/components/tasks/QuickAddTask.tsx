import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTasks } from '../../contexts/TaskContext';
import { CATEGORIES, PRIORITIES, STATUSES, TaskCategory, TaskPriority, TaskStatus } from '../../types';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const QuickAddTask: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState<TaskCategory>('Personal');
  const [status, setStatus] = useState<TaskStatus>('To-Do');
  const [priority, setPriority] = useState<TaskPriority>('Medium');
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title) return;
    
    addTask(title, description, dueDate, category, status, priority);
    
    // Reset form
    setTitle('');
    setDescription('');
    setDueDate('');
    setCategory('Personal');
    setStatus('To-Do');
    setPriority('Medium');
    setIsOpen(false);
  };

  return (
    <div className="mb-8">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Task
        </button>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-4">Add New Task</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              fullWidth
              required
            />
            
            <Input
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description (optional)"
              fullWidth
            />
            
            <Input
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              fullWidth
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value as TaskCategory)}
                options={CATEGORIES.map(cat => ({ value: cat, label: cat }))}
                fullWidth
              />
              
              <Select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value as TaskStatus)}
                options={STATUSES.map(status => ({ value: status, label: status }))}
                fullWidth
              />

              <Select
                label="Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as TaskPriority)}
                options={PRIORITIES.map(priority => ({ value: priority, label: priority }))}
                fullWidth
                required
              />
            </div>
            
            <div className="flex justify-end space-x-2 mt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                Add Task
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};