import React from 'react';
import { createContext, useContext, ReactNode } from 'react';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  display_picture: string;
}

interface UserContextProps {
  users: User[];
  setUsers: (users: User[]) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = React.useState<User[]>([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};