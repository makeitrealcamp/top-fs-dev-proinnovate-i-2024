import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute';
import { Slot } from 'expo-router';

export default function ProfileLayout() {
  return (
    <ProtectedRoute>
      <Slot />
    </ProtectedRoute>
  );
}
