import { Stack } from 'expo-router';

export default function addToCartLayout() {
  return (
    <Stack>
      <Stack.Screen
        name=""
        options={{
          presentation: 'modal',
          title: 'Add To Cart',
          // headerShown: false,
        }}
      />
    </Stack>
  );
}
