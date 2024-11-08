import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Product } from '.';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { ProductDetailSkeleton } from '@/components/skeleton/ProductDetailSkeleton';

export default function product() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { productId } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((json) => {
        console.log({ json });
        setProduct(json);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!product) {
    return null;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
        <ActivityIndicator size={'large'} color={'salmon'} />
      </View>
    );
  }
  console.log(product.title);
  return (
    <SafeAreaView className="flex-1 items-center space-between gap-4">
      <Stack.Screen
        options={{
          title: `${product.title}`,
        }}
      />
      <Text>Products</Text>

      <View>
        <Text className="text-red-500">{product.title}</Text>
        <Animated.Image
          entering={FadeInDown.delay(100)}
          source={{ uri: product.image }}
          style={{ width: 200, height: 200 }}
        />
        <Animated.View entering={FadeInDown.delay(200)}>
          <Text>{product.price}</Text>
          <Text>{product.description}</Text>
          <Text>{product.category}</Text>
          <Text>{product.image}</Text>
          <Text>{product.rating.rate}</Text>
          <Text>{product.rating.count}</Text>
        </Animated.View>
        <View>
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
          <TouchableOpacity onPress={() => router.push(`/moreInfo`)}>
            <Text>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
