import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';

const app = () => {
  return <Redirect href={'/home'} />;
};

export default app;

const styles = StyleSheet.create({});
