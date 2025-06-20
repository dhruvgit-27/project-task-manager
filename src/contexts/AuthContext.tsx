import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types';
import { 
  getUsers, 
  saveUser, 
  findUserByEmail, 
  getCurrentUser, 
  setCurrentUser,
  removeCurrentUser,
  setAuthSession,
  getAuthSession,
  removeAuthSession
} from '../utils/localStorage';

interface AuthContextType {
  currentUser: User | null;
  register: (name: string, email: string, password: string) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check for existing session on app load
    const session = getAuthSession();
    if (session && session.isAuthenticated) {
      const user = getCurrentUser();
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        // Session exists but no user data, clear invalid session
        removeAuthSession();
      }
    }
  }, []);

  const register = (name: string, email: string, password: string): boolean => {
    if (findUserByEmail(email)) {
      return false; // User already exists
    }

    const newUser: User = {
      id: uuidv4(),
      name,
      email,
      password,
    };

    saveUser(newUser);
    setUser(newUser);
    setCurrentUser(newUser);
    setAuthSession({ isAuthenticated: true, userId: newUser.id });
    setIsAuthenticated(true);
    return true;
  };

  const login = (email: string, password: string): boolean => {
    const user = findUserByEmail(email);
    
    if (user && user.password === password) {
      setUser(user);
      setCurrentUser(user);
      setAuthSession({ isAuthenticated: true, userId: user.id });
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const logout = (): void => {
    setUser(null);
    removeCurrentUser();
    removeAuthSession();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};