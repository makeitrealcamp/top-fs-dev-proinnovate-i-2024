import { useAuth } from '@/provider/AuthProvider';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, View } from 'react-native';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { user } = useAuth();
  return (
    <DrawerContentScrollView {...props} scrollEnabled>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/young-prince-royal-attire_1308-176144.jpg?t=st=1730987982~exp=1730991582~hmac=5ce0fd902d308f2d2fea8df35fc3579e4909f347644c0fe3c1a8c80c95c5c993&w=740',
          }}
          style={{ width: 150, height: 150, borderRadius: 10 }}
        />
        <Text>{user?.email}</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
