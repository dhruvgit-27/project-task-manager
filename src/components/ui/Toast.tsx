import React, { useEffect, useState } from 'react';
import { CheckCircle, X, AlertCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  isVisible,
  onClose,
  duration = 5000
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border max-w-sm",
        type === 'success' 
          ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
          : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
      )}>
        {type === 'success' ? (
          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
        ) : (
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
        )}
        
        <p className="text-sm font-medium flex-1">{message}</p>
        
        <button
          onClick={onClose}
          className={cn(
            "p-1 rounded-full transition-colors flex-shrink-0",
            type === 'success'
              ? "hover:bg-green-100 dark:hover:bg-green-800/30"
              : "hover:bg-red-100 dark:hover:bg-red-800/30"
          )}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};