import React, {useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {RootView} from '../components';

const DetailScreen = ({navigation}) => {
  const url = navigation.getParam('url');

  return (
    <RootView>
      <WebView source={{uri: url}} />
    </RootView>
  );
};

export default DetailScreen;
