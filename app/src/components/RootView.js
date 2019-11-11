import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const RootView = props => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};
