import { useAuth } from '@/provider/AuthProvider';
import { Redirect } from 'expo-router';
import { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Redirect href={'/home'} />;
  }
  return <>{children}</>;
};
