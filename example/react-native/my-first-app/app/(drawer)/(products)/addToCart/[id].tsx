import { Stack } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

export default function AddToCart() {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen
        options={{
          presentation: 'modal',
          title: 'Add To Cart',
          // headerShown: false,
        }}
      />
      <Text>AddToCart</Text>
    </SafeAreaView>
  );
}
