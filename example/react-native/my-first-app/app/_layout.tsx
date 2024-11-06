import { Slot, Stack, Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import '../global.css';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'tomato' }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Contact',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={!focused ? 'infocirlceo' : 'infocirlce'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(products)"
        options={{
          href: null,
        }}
      />
      {/* <Tabs.Screen
        name="(products)/product"
        options={{
          href: null,
        }}
      /> */}
    </Tabs>
  );
}
