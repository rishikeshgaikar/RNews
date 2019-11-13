import React from 'react';
import {Text, TouchableOpacity, ImageBackground, View} from 'react-native';
import {Card} from '../components';
export const TopHeadlineListItem = ({onPress, title, image}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={{
          width: 200,
          height: 300,
          margin: 10,
          flex: 1,
        }}
        source={{uri: image}}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 5,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: 10,
              margin: 5,
            }}>
            <Text style={{fontSize: 10, margin: 5}}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
