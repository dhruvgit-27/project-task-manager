import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, ListTodo, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-x-hidden">
      <div className="text-center max-w-4xl mx-auto relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-3xl filter blur-3xl -z-10" />
        
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-8 animate-float">
            <ListTodo className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 dark:text-blue-400 mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Task Manager
            </h1>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Organize Your Life with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"> Elegance</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto px-4">
            Experience task management reimagined. Streamline your workflow with our intuitive and beautiful interface.
          </p>
          
          <div className="flex justify-center gap-4 sm:gap-6 mb-20">
            <Button 
              size="lg" 
              onClick={() => navigate('/register')}
              className="group hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/login')}
              className="hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Sign In
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-left px-4">
          {[
            {
              icon: ListTodo,
              title: "Stay Organized",
              description: "Categorize and prioritize your tasks with our intuitive interface.",
              delay: "0"
            },
            {
              icon: Clock,
              title: "Track Progress",
              description: "Monitor your achievements with real-time progress tracking.",
              delay: "100"
            },
            {
              icon: CheckCircle,
              title: "Achieve More",
              description: "Complete tasks efficiently and celebrate your productivity.",
              delay: "200"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-6 sm:p-8 rounded-2xl hover-card animate-fade-in dark:bg-gray-900"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="text-blue-500 dark:text-blue-400 mb-6">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};