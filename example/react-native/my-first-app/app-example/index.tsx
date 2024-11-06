import { Text, View } from 'react-native';

export default function Home() {
  console.log('rendering Home');
  <View
    style={{
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'red',
      backgroundColor: 'red',
    }}
  >
    <Text
      style={{
        color: 'black',
        fontSize: 20,
      }}
    >
      Home!!
    </Text>
  </View>;
}
