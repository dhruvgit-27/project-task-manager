import { useState, useCallback } from 'react';

export interface ToastState {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({
      message,
      type,
      isVisible: true,
    });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({
      ...prev,
      isVisible: false,
    }));
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
};