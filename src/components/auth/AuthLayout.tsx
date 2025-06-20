import React, { ReactNode } from 'react';
import { ClipboardList } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-indigo-100/80 dark:from-gray-900 dark:to-black flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden max-w-md w-full border border-gray-200 dark:border-gray-800">
        <div className="bg-blue-600 dark:bg-blue-700 p-6 flex justify-center">
          <div className="flex items-center">
            <ClipboardList className="h-8 w-8 text-white mr-2" />
            <h1 className="text-xl font-bold text-white">Task Manager</h1>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
};