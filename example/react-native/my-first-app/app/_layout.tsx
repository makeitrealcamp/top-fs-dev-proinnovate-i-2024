import { Slot, Stack } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import '../global.css';
import { AuthProvider } from '@/provider/AuthProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Drawer from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
      {/* <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(products)"
          options={{
            headerTitle: 'Products',
          }}
        />
        <Stack.Screen
          name="(auth)/login"
          options={{
            headerTitle: 'Auth',
          }}
        />
      </Stack> */}
    </AuthProvider>
  );
}
