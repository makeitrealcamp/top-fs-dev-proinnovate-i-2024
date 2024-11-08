import React from 'react';
import { Text, View } from 'react-native';

export const ProductDetailSkeleton = () => {
  return (
    <View className="max-w h-full p-4 border border-gray-200 rounded shadow animate-pulse bg-white dark:border-gray-700">
      <View className="flex items-center justify-center h-96 mb-4 bg-gray-300 rounded dark:bg-gray-700"></View>

      <View className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></View>
      <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></View>
      <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></View>
      <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></View>
      <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></View>
      <View className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></View>

      <View className="flex items-center mt-8 gap-8">
        <View className="flex-row gap-4">
          <View className="h-8 bg-gray-200  dark:bg-gray-700 w-8 mb-2"></View>
          <View className="h-8 bg-gray-200  dark:bg-gray-700 w-20 mb-2"></View>
          <View className="h-8 bg-gray-200  dark:bg-gray-700 w-8 mb-2"></View>
        </View>
        <View>
          <View className="w-64 h-12 bg-gray-200 rounded-full dark:bg-gray-700"></View>
        </View>
      </View>
    </View>
  );
};
