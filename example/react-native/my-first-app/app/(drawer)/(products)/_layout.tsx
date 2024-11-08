import { Stack } from 'expo-router';

export default function productsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Products',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="moreInfo"
        options={{
          presentation: 'modal',
          title: 'More Info',
          // headerShown: false,
        }}
      />
    </Stack>
  );
}
