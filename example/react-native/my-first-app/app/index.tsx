import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function home() {
  return (
    <View style={styles.container} className="flex-1 border border-red-600">
      <Text className="text-red-400">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Image
        source={require('../assets/images/adaptive-icon.png')}
        style={{ width: 200, height: 200 }}
      />
      <Link href="/about">About</Link>
      <Link href="/products">Go to products</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'green',
    fontSize: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderStyle: 'dashed',
    borderWidth: 1,
  },
});
