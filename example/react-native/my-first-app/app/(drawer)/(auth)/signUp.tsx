import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { emailRegex } from '@/libs/email_regex';
import { CustomInput } from '@/components/CustomIput';

type SigUpUser = {
  email: string;
  password: string;
  repeatPassword: string;
};

export default function signUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SigUpUser>();

  const watchPassword = watch('password');

  const onSubmit = (data: SigUpUser) => {
    console.log({
      data,
    });
    //call api
  };
  console.log(errors);
  return (
    <View className="flex-1 justify-center">
      <Text>Sign UP</Text>
      <View className="gap-4 px-8">
        <CustomInput
          placeholder="email"
          name="email"
          rules={{
            required: 'Please enter email !!!',
            pattern: {
              value: emailRegex,
              message: 'Invalid email !!!',
            },
          }}
          control={control}
        />
        <CustomInput
          placeholder="password"
          name="password"
          rules={{
            required: 'Please enter password',
            minLength: {
              value: 4,
              message: 'Password must be at least 6 characters',
            },
          }}
          control={control}
          secureTextEntry
        />
        <CustomInput
          placeholder="repeated password"
          name="repeatPassword"
          rules={{
            required: 'Please repeat the  password',
            minLength: {
              value: 4,
              message: 'Password must be at least 6 characters',
            },
            validate: (value) =>
              value === watchPassword || 'The passwords do not match',
          }}
          control={control}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text className="text-center bg-blue-500 text-white rounded-md px-4 py-2">
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
