import React from 'react';
import { useTasks } from '../../contexts/TaskContext';
import { TaskCard } from './TaskCard';
import { TaskCategory, TaskPriority, TaskStatus } from '../../types';

interface TasksViewProps {
  activeCategory: TaskCategory | 'All';
  activeStatus: TaskStatus | 'All';
  activePriority: TaskPriority | 'All';
}

export const TasksView: React.FC<TasksViewProps> = ({
  activeCategory,
  activeStatus,
  activePriority
}) => {
  const { tasks } = useTasks();

  const filteredTasks = tasks.filter(task => {
    const matchesCategory = activeCategory === 'All' || task.category === activeCategory;
    const matchesStatus = activeStatus === 'All' || task.status === activeStatus;
    const matchesPriority = activePriority === 'All' || task.priority === activePriority;
    return matchesCategory && matchesStatus && matchesPriority;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">No tasks found with the selected filters</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};