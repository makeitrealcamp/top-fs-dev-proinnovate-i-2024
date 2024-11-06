import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Product } from './products';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function product() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { productId } = useLocalSearchParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log({ json });
        setProduct(json);
      });
  }, []);

  if (!product) {
    return null;
  }
  console.log(product.title);
  return (
    <View className="flex-1 border border-green-500">
      <Text>Products</Text>

      <View>
        <Text className="text-red-500">{product.title}</Text>
        <Image
          source={{ uri: product.image }}
          style={{ width: 200, height: 200 }}
        />
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
        <Text>{product.category}</Text>
        <Text>{product.image}</Text>
        <Text>{product.rating.rate}</Text>
        <Text>{product.rating.count}</Text>
        <Pressable
          onPress={() => {
            router.push(`/`);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
          ]}
        >
          {({ pressed }) => (
            <Text
              style={{
                color: pressed ? 'rgb(30, 144, 255)' : 'rgb(59, 130, 246)',
              }}
            >
              {' Go to home'}
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}
