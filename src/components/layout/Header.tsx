import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NotificationCenter } from '../notifications/NotificationCenter';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            {isAuthenticated && (
              <button
                onClick={onMenuClick}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors shrink-0"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            )}
            <Link 
              to="/" 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 truncate"
            >
              Task Manager
            </Link>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {isAuthenticated && <NotificationCenter />}
            <ThemeToggle theme={theme} setTheme={setTheme} />
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-700 dark:text-gray-300 hidden sm:block">
                  {currentUser?.name}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Login</span>
                </Button>
                <Button 
                  size="sm"
                  onClick={() => navigate('/register')}
                  className="hidden sm:block"
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};