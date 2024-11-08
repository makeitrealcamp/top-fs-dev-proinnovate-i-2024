import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'tomato' }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gestures"
        options={{
          title: 'Gesture',
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
      {/* <Tabs.Screen
        name="(products)"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="(auth)"
        options={{
          href: null,
        }}
      /> */}
    </Tabs>
  );
}
