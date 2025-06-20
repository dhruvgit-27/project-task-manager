import React from 'react';
import { CATEGORIES, PRIORITIES, STATUSES, TaskCategory, TaskPriority, TaskStatus } from '../../types';
import { cn } from '../../utils/cn';

interface TaskFiltersProps {
  activeCategory: TaskCategory | 'All';
  activeStatus: TaskStatus | 'All';
  activePriority: TaskPriority | 'All';
  onCategoryChange: (category: TaskCategory | 'All') => void;
  onStatusChange: (status: TaskStatus | 'All') => void;
  onPriorityChange: (priority: TaskPriority | 'All') => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  activeCategory,
  activeStatus,
  activePriority,
  onCategoryChange,
  onStatusChange,
  onPriorityChange
}) => {
  return (
    <div className="glass-effect rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-800/50 p-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Filter Tasks</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Category</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange('All')}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeCategory === 'All' 
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              All
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  activeCategory === category 
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Status</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onStatusChange('All')}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeStatus === 'All' 
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              All
            </button>
            {STATUSES.map(status => (
              <button
                key={status}
                onClick={() => onStatusChange(status)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  activeStatus === status 
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Priority</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onPriorityChange('All')}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activePriority === 'All' 
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              All
            </button>
            {PRIORITIES.map(priority => (
              <button
                key={priority}
                onClick={() => onPriorityChange(priority)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  activePriority === priority 
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {priority}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};