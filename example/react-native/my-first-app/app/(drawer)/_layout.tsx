import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '@/provider/AuthProvider';
import { CustomDrawer } from '@/components/CustomDrawer';

export default function drawerLayout() {
  const { isLoggedIn } = useAuth();
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
      drawerContent={CustomDrawer}
      
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Home',
            drawerIcon: ({ color, focused }) => (
              <AntDesign name="home" size={25} color={color} />
            ),
          }}
        />

        {isLoggedIn ? (
          <Drawer.Screen
            name="(protected)"
            options={{
              title: 'User Profile',
            }}
          />
        ) : (
          <Drawer.Screen
            name="(auth)"
            options={{
              title: 'Login',
            }}
          />
        )}
        <Drawer.Screen
          name="(products)"
          options={{
            title: 'Products',
          }}
        />
{/* 
        <Drawer.Screen
          name="(products)"
          options={{
            href: null,
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
