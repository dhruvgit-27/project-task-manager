import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Greeting } from './Greeting';
import { TaskModal } from '../tasks/TaskModal';
import { TaskFilters } from '../tasks/TaskFilters';
import { TasksView } from '../tasks/TasksView';
import { CategoriesView } from '../tasks/CategoriesView';
import { Button } from '../ui/Button';
import { TaskCategory, TaskPriority, TaskStatus } from '../../types';

export const Dashboard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view') || 'dashboard';
  
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<TaskCategory | 'All'>('All');
  const [activeStatus, setActiveStatus] = useState<TaskStatus | 'All'>('All');
  const [activePriority, setActivePriority] = useState<TaskPriority | 'All'>('All');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <Greeting />
        <Button 
          onClick={() => setIsTaskModalOpen(true)}
          className="flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Task
        </Button>
      </div>

      {view === 'filters' ? (
        <>
          <TaskFilters
            activeCategory={activeCategory}
            activeStatus={activeStatus}
            activePriority={activePriority}
            onCategoryChange={setActiveCategory}
            onStatusChange={setActiveStatus}
            onPriorityChange={setActivePriority}
          />
          <TasksView
            activeCategory={activeCategory}
            activeStatus={activeStatus}
            activePriority={activePriority}
          />
        </>
      ) : view === 'categories' ? (
        <CategoriesView />
      ) : (
        <TasksView
          activeCategory={activeCategory}
          activeStatus={activeStatus}
          activePriority={activePriority}
        />
      )}

      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
      />
    </div>
  );
};