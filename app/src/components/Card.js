import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#036675',
  },
});

export const Card = props => {
  return <View style={styles.card}>{props.children}</View>;
};
