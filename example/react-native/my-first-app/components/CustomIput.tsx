import { Controller, UseControllerProps } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

export const CustomInput = ({
  control,
  name,
  placeholder,
  rules,
  secureTextEntry,
}: {
  control: UseControllerProps['control'];
  name: string;
  placeholder: string;
  rules: UseControllerProps['rules'];
  secureTextEntry?: boolean;
}) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View>
          <TextInput
            className={`border ${
              error ? 'border-red-500' : 'border-gray-500'
            }  rounded-md px-4 py-2`}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
          />
          {error && <Text className="text-red-500">{error.message}</Text>}
        </View>
      )}
    />
  );
};
