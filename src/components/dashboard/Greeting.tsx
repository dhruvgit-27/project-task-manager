import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export const Greeting: React.FC = () => {
  const { currentUser } = useAuth();
  const today = new Date();
  
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="mb-8 animate-fade-in">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Welcome back, {currentUser?.name}!
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{formatDate(today)}</p>
    </div>
  );
};