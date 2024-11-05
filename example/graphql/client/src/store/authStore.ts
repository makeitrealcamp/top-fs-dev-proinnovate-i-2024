import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  login: async (email, password) => {
    // Simulate API call
    const mockUser = {
      id: '1',
      username: 'johndoe',
      email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      createdAt: new Date().toISOString(),
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  register: async (username, email, password) => {
    // Simulate API call
    const mockUser = {
      id: '1',
      username,
      email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      createdAt: new Date().toISOString(),
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));