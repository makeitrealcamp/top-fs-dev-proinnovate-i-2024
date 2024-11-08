import { createContext, ReactNode, useContext, useState } from 'react';

type UserContext = {
  isLoggedIn: boolean;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
  signUp: () => void;
};

const UserContext = createContext<UserContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = ({ email, password }: { email: string; password: string }) => {
    console.log('isLoggedIn', isLoggedIn);
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        login,
        logout: () => setIsLoggedIn(false),
        signUp: () => {},
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
