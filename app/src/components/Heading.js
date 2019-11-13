import React from 'react';
import {Text, View} from 'react-native';

export const Heading = ({text}) => (
  <Text style={{padding: 10, fontSize: 20, fontWeight: 'bold'}}>{text}</Text>
);
