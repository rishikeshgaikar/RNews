import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  heading: {padding: 10, fontSize: 20, fontWeight: 'bold'},
});

export const Heading = ({text}) => <Text style={styles.heading}>{text}</Text>;
