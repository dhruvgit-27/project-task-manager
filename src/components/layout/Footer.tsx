import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-center">
            © 2025 Task Manager. All rights reserved.
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <Link 
              to="/terms" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/privacy" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <a 
              href="mailto:contacttaskmanagerhere@gmail.com" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              <Mail className="h-4 w-4" />
              contacttaskmanagerhere@gmail.com
            </a>
            <a 
              href="tel:6395227506" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              <Phone className="h-4 w-4" />
              6395227506
            </a>
          </div>
          
          {/* Contact Link */}
          <Link 
            to="/contact" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};