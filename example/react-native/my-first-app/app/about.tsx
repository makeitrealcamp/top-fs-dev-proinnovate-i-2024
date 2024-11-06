import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function about() {
  return (
    <View style={styles.container} className="flex-1 border border-red-600">
      <Text className="text-red-400">About</Text>
      <Image
        source={require('../assets/images/adaptive-icon.png')}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Type here to translate!"
      />
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
