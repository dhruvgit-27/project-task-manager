import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { cn } from '../../utils/cn';

type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  return (
    <div className="relative p-1.5 bg-gray-100 dark:bg-gray-900 rounded-xl">
      <div className="flex items-center gap-1.5">
        {[
          { value: 'light', icon: Sun },
          { value: 'dark', icon: Moon },
          { value: 'system', icon: Monitor }
        ].map(({ value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value as Theme)}
            className={cn(
              "relative p-2.5 rounded-lg transition-all duration-200",
              "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
              theme === value && [
                "text-blue-600 dark:text-blue-400",
                "bg-white dark:bg-gray-800",
                "shadow-sm"
              ]
            )}
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
};