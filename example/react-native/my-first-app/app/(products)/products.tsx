import { Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function products() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Text>Products</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="flex-1">
            <Text>{item.title}</Text>
            <Image
              source={{ uri: item.image }}
              style={{ width: 200, height: 200 }}
            />
            <Text>{item.price}</Text>
            <Text>{item.description}</Text>
            <Text>{item.category}</Text>
            <Text>{item.image}</Text>
            <Text>{item.rating.rate}</Text>
            <Text>{item.rating.count}</Text>
            <Pressable
              onPress={() => {
                router.push(`/${item.id}`);
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
              ]}
            >
              {({ pressed }) => (
                <Text style={styles.text}>{' Go to product'}</Text>
              )}
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <Link href="/product">Product 1</Link>
      <Pressable
        onPress={() => {
          router.push('/product');
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => <Text style={styles.text}>{' Go to product'}</Text>}
      </Pressable> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'red',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
