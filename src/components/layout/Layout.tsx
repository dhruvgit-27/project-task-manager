import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../utils/cn';

export const Layout: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black font-inter flex flex-col">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex relative flex-1">
        {isAuthenticated && (
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        )}
        
        <main className={cn(
          "flex-1 min-h-[calc(100vh-4rem)]",
          "transition-all duration-300 ease-in-out",
          isAuthenticated && "lg:ml-[280px]"
        )}>
          <div className="container mx-auto p-4 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};