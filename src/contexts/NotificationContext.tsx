import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Notification, NotificationType, Task } from '../types';
import { useTasks } from './TaskContext';
import { useAuth } from './AuthContext';

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (taskId: string, type: NotificationType, message: string) => void;
  markAsRead: (notificationId: string) => void;
  clearNotification: (notificationId: string) => void;
  unreadCount: number;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notifiedTasks, setNotifiedTasks] = useState<Set<string>>(new Set());
  const { tasks } = useTasks();
  const { isAuthenticated, currentUser } = useAuth();

  // Load persisted notification state on mount
  useEffect(() => {
    if (currentUser) {
      const savedNotifications = localStorage.getItem(`notifications_${currentUser.id}`);
      const savedNotifiedTasks = localStorage.getItem(`notified_tasks_${currentUser.id}`);
      
      if (savedNotifications) {
        setNotifications(JSON.parse(savedNotifications));
      }
      
      if (savedNotifiedTasks) {
        setNotifiedTasks(new Set(JSON.parse(savedNotifiedTasks)));
      }
    }
  }, [currentUser]);

  // Persist notification state
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`notifications_${currentUser.id}`, JSON.stringify(notifications));
      localStorage.setItem(`notified_tasks_${currentUser.id}`, JSON.stringify(Array.from(notifiedTasks)));
    }
  }, [notifications, notifiedTasks, currentUser]);

  const addNotification = (taskId: string, type: NotificationType, message: string) => {
    // Check if we already have a notification for this task
    const existingNotification = notifications.find(n => n.taskId === taskId && n.type === type);
    if (existingNotification) return;

    const newNotification: Notification = {
      id: uuidv4(),
      taskId,
      type,
      message,
      createdAt: new Date().toISOString(),
      read: false,
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setNotifiedTasks(prev => new Set([...prev, taskId]));
  };

  const markAsRead = (notificationId: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const clearNotification = (notificationId: string) => {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification) {
      setNotifications(prev => prev.filter(n => n.id !== notificationId));
      // Don't remove from notifiedTasks to prevent re-notification
    }
  };

  const clearTaskNotifications = (taskId: string) => {
    setNotifications(prev => prev.filter(n => n.taskId !== taskId));
  };

  // Check for tasks that need notifications
  useEffect(() => {
    if (!isAuthenticated || !currentUser) return;

    const checkTaskNotifications = () => {
      const now = new Date();

      tasks.forEach(task => {
        // If task is completed, clear any existing notifications for it
        if (task.status === 'Completed') {
          clearTaskNotifications(task.id);
          return;
        }

        // Skip if no due date or already notified
        if (!task.dueDate || notifiedTasks.has(task.id)) return;

        const dueDate = new Date(task.dueDate);
        const hoursUntilDue = (dueDate.getTime() - now.getTime()) / (1000 * 60 * 60);

        // Task is overdue - only notify once
        if (hoursUntilDue < 0) {
          const hoursOverdue = Math.abs(Math.round(hoursUntilDue));
          addNotification(
            task.id,
            'overdue',
            `Task "${task.title}" is overdue by ${hoursOverdue} ${hoursOverdue === 1 ? 'hour' : 'hours'}`
          );
        }
        // Task is due within 24 hours - only notify once
        else if (hoursUntilDue > 0 && hoursUntilDue <= 24) {
          const hoursRemaining = Math.round(hoursUntilDue);
          addNotification(
            task.id,
            'due-soon',
            `Task "${task.title}" is due in ${hoursRemaining} ${hoursRemaining === 1 ? 'hour' : 'hours'}`
          );
        }
      });
    };

    // Initial check
    checkTaskNotifications();

    // Check notifications every 30 minutes (reduced frequency for performance)
    const interval = setInterval(checkTaskNotifications, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, [tasks, isAuthenticated, currentUser, notifiedTasks]);

  // Clean up notifications when user logs out
  useEffect(() => {
    if (!isAuthenticated) {
      setNotifications([]);
      setNotifiedTasks(new Set());
    }
  }, [isAuthenticated]);

  // Remove notifications for deleted tasks
  useEffect(() => {
    const taskIds = new Set(tasks.map(t => t.id));
    setNotifications(prev => prev.filter(n => taskIds.has(n.taskId)));
    setNotifiedTasks(prev => new Set(Array.from(prev).filter(id => taskIds.has(id))));
  }, [tasks]);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        clearNotification,
        unreadCount,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};