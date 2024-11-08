import { Stack } from 'expo-router';

export default function authLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{
        headerTitle: 'Login',
        presentation: 'modal',
        headerShown: false,
        }} />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}
