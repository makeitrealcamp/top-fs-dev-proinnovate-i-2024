import { emailRegex } from '@/libs/email_regex';
import { useAuth } from '@/provider/AuthProvider';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const { login, isLoggedIn } = useAuth();
  // Challenge use ZOD to validate form

  const handleLogin = () => {
    console.log({
      email,
      password,
    });

    if (!email || !password) {
      Alert.alert('Login', 'Please enter email and password');
      setErrors({
        email: 'Please enter email',
        password: 'Please enter password',
      });
      return;
    }
    console.log(emailRegex.test(email));
    if (!emailRegex.test(email)) {
      Alert.alert('Login', 'Invalid email');
      setErrors({
        email: 'Invalid email',
        password: '',
      });
      return;
    }

    if (password.length < 6) {
      Alert.alert('Login', 'Password must be at least 6 characters');
      setErrors({
        password: 'Password must be at least 6 characters',
        email: '',
      });
      return;
    }

    // LOGIN SERVICE
    login({ email, password });
    Alert.alert('Login', 'Login success');
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/profile');
    }
  }, [isLoggedIn]);

  return (
    <View className="flex-1 justify-center">
      <Text>login</Text>
      <View className="gap-4 px-8">
        <TextInput
          className={`border ${
            errors.email ? 'border-red-500' : 'border-gray-500'
          }  rounded-md px-4 py-2`}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text className="text-red-500">{errors.email}</Text>}
        <TextInput
          className="border border-gray-500 rounded-md px-4 py-2"
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password && (
          <Text className="text-red-500">{errors.password}</Text>
        )}
        <TouchableOpacity onPress={handleLogin}>
          <Text className="text-center bg-blue-500 text-white rounded-md px-4 py-2">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
